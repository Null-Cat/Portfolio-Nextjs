"use client";
import {
  faCheck,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToast, Button, Form, Input, Textarea } from "@heroui/react";
import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        element: HTMLElement,
        options: {
          sitekey: string;
          theme?: "auto" | "light" | "dark";
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

const TURNSTILE_LIVE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const TURNSTILE_DUMMY_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY_DUMMY ??
  "1x00000000000000000000AA";
const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1", "::1"]);

const resolveTurnstileSiteKey = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (LOCAL_HOSTNAMES.has(hostname)) {
      return TURNSTILE_DUMMY_SITE_KEY;
    }
  }

  return TURNSTILE_LIVE_SITE_KEY || TURNSTILE_DUMMY_SITE_KEY;
};

const ContactForm = () => {
  const [hasMessageSubmitted, setHasMessageSubmitted] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [requestResponse, setRequestResponse] = useState("");
  const [buttonColor, setButtonColor] = useState<
    "primary" | "default" | "secondary" | "success" | "warning" | "danger"
  >("primary");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken(null);
    if (typeof window !== "undefined" && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current ?? undefined);
    }
  }, []);

  const renderTurnstile = useCallback(() => {
    if (typeof window === "undefined" || !window.turnstile) {
      return;
    }

    const container = turnstileContainerRef.current;
    if (!container) return;

    const siteKey = resolveTurnstileSiteKey();
    if (!siteKey) {
      setTurnstileError(
        "Verification widget is not configured. Please try again later."
      );
      return;
    }

    setTurnstileError(null);
    setTurnstileToken(null);
    container.innerHTML = "";
    turnstileWidgetIdRef.current = window.turnstile.render(container, {
      sitekey: siteKey,
      theme: "dark",
      callback: (token: string) => {
        setTurnstileError(null);
        setTurnstileToken(token);
      },
      "expired-callback": () => {
        setTurnstileToken(null);
        setTurnstileError("Verification expired. Please try again.");
        resetTurnstile();
      },
      "error-callback": () => {
        setTurnstileToken(null);
        setTurnstileError(
          "Verification challenge failed to load. Please refresh the page."
        );
      },
    });
  }, [resetTurnstile]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    const handleLoad = () => renderTurnstile();
    const handleError = () => {
      setTurnstileError(
        "Unable to load verification widget. Please try again later."
      );
    };

    if (window.turnstile) {
      renderTurnstile();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`
    );

    if (script) {
      script.addEventListener("load", handleLoad);
      script.addEventListener("error", handleError);
      return () => {
        script?.removeEventListener("load", handleLoad);
        script?.removeEventListener("error", handleError);
      };
    }

    script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);
    document.head.appendChild(script);

    return () => {
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, [renderTurnstile]);
  return (
    <Form
      className="flex flex-col justify-center items-center h-full"
      onSubmit={(e) => {
        e.preventDefault();
        setRequestResponse("");
        setButtonColor("primary");
        setTurnstileError(null);

        if (!turnstileToken) {
          setTurnstileError("Please complete the verification challenge.");
          addToast({
            title: "Verification Required",
            description: "Please confirm you are not a robot before submitting.",
            color: "danger",
            timeout: 5000,
            shouldShowTimeoutProgess: true,
          });
          return;
        }

        setSendingMessage(true);

        const formData = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
        const payload = {
          ...formData,
          turnstileToken,
        };

        const contactFormRequest = new XMLHttpRequest();
        contactFormRequest.open("POST", "/api/contact", true);
        contactFormRequest.setRequestHeader("Content-Type", "application/json");

        contactFormRequest.onload = () => {
          setSendingMessage(false);

          let responseBody: { error?: string; message?: string } | null = null;
          try {
            responseBody = contactFormRequest.responseText
              ? JSON.parse(contactFormRequest.responseText)
              : null;
          } catch (err) {
            responseBody = null;
          }

          if (contactFormRequest.status === 200) {
            setHasMessageSubmitted(true);
            setRequestResponse("Message Sent Successfully!");
            setButtonColor("success");
            addToast({
              title: "Message Sent!",
              description: "Thank you for reaching out!",
              color: "success",
              timeout: 5000,
              shouldShowTimeoutProgess: true,
            });
            return;
          }

          setHasMessageSubmitted(false);

          if (contactFormRequest.status === 413) {
            setRequestResponse("Message too long!");
            setButtonColor("danger");
            addToast({
              title: "Message Failed to Send!",
              description:
                "Message too long! Ensure your message is less than 1000 characters",
              color: "danger",
              timeout: 5000,
              shouldShowTimeoutProgess: true,
            });
            resetTurnstile();
            return;
          }

          const errorMessage =
            responseBody?.error ??
            "Failed to Send :( Reach Me at|philip@philipwhite.dev";
          const normalizedError = errorMessage.toLowerCase();
          setRequestResponse(errorMessage);
          setButtonColor("danger");
          addToast({
            title: "Message Failed to Send!",
            description:
              normalizedError.includes("philip@philipwhite.dev")
                ? "Please send me an email and I will get back to you as soon as possible."
                : errorMessage,
            color: "danger",
            timeout: 5000,
            shouldShowTimeoutProgess: true,
          });
          setTurnstileError(
            normalizedError.includes("verification") ? errorMessage : null
          );
          resetTurnstile();
        };

        contactFormRequest.onerror = () => {
          setSendingMessage(false);
          setHasMessageSubmitted(false);
          const fallbackMessage = "Failed to Send :( Reach Me at|philip@philipwhite.dev";
          setRequestResponse(fallbackMessage);
          setButtonColor("danger");
          addToast({
            title: "Message Failed to Send!",
            description:
              "Please send me an email and I will get back to you as soon as possible.",
            color: "danger",
            timeout: 5000,
            shouldShowTimeoutProgess: true,
          });
          resetTurnstile();
        };

        contactFormRequest.send(JSON.stringify(payload));
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-default-100 backdrop-blur p-4 rounded-lg lg:w-[90%] w-full">
        <Input
          isRequired
          isClearable
          name="name"
          variant="bordered"
          label="Name"
          labelPlacement="outside"
          placeholder="Your Name"
          type="text"
          maxLength={30}
          isDisabled={hasMessageSubmitted}
        />
        <Input
          isRequired
          isClearable
          name="email"
          variant="bordered"
          label="Email"
          labelPlacement="outside"
          placeholder="example@domain.com"
          startContent={
            <FontAwesomeIcon className="w-4 h-4" icon={faEnvelope} />
          }
          type="email"
          errorMessage="Please enter a valid email address"
          maxLength={40}
          isDisabled={hasMessageSubmitted}
        />
        <Input
          isRequired
          isClearable
          name="subject"
          className="sm:col-span-2"
          variant="bordered"
          label="Subject"
          labelPlacement="outside"
          placeholder="Let's talk about..."
          type="text"
          maxLength={90}
          isDisabled={hasMessageSubmitted}
        />
        <Textarea
          isRequired
          isClearable
          name="message"
          className="sm:col-span-2"
          variant="bordered"
          label="Message"
          labelPlacement="outside"
          placeholder="Your message here..."
          minRows={5}
          maxLength={1000}
          isDisabled={hasMessageSubmitted}
        />
        <div className="sm:col-span-2 flex flex-col items-center gap-2">
          <div ref={turnstileContainerRef} className="flex justify-center" />
          {turnstileError ? (
            <p className="text-sm text-red-400 text-center">{turnstileError}</p>
          ) : null}
        </div>
        <Button
          className="sm:col-span-2"
          color={buttonColor}
          variant="shadow"
          type="submit"
          endContent={
            hasMessageSubmitted ? (
              buttonColor == "success" ? (
                <FontAwesomeIcon icon={faCheck} />
              ) : null
            ) : (
              <FontAwesomeIcon icon={faPaperPlane} />
            )
          }
          isDisabled={hasMessageSubmitted || sendingMessage}
          isLoading={sendingMessage && !requestResponse}
        >
          {requestResponse ? (
            <div className="flex flex-col">
              {requestResponse.split("|").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          ) : sendingMessage ? (
            "Sending Message..."
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
