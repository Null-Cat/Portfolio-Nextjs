"use client";
import {
  faCheck,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addToast, Button, Form, Input, Textarea } from "@heroui/react";
import { useState } from "react";

const ContactForm = () => {
  const [hasMessageSubmitted, setHasMessageSubmitted] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [requestResponse, setRequestResponse] = useState("");
  const [buttonColor, setButtonColor] = useState<
    "primary" | "default" | "secondary" | "success" | "warning" | "danger"
  >("primary");
  return (
    <Form
      className="flex flex-col justify-center items-center h-full"
      onSubmit={(e) => {
        e.preventDefault();
        setHasMessageSubmitted(true);
        setSendingMessage(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        const contactFormRequest = new XMLHttpRequest();
        contactFormRequest.open("POST", "/api/contact", true);
        contactFormRequest.setRequestHeader("Content-Type", "application/json");
        contactFormRequest.onload = () => {
          if (contactFormRequest.status === 200) {
            setRequestResponse(
              "Message Sent Successfully!"
            );
            setButtonColor("success");
            addToast({
              title: "Message Sent!",
              description: "Thank you for reaching out!",
              color: "success",
              timeout: 5000,
              shouldShowTimeoutProgess: true,
            });
          } else if (contactFormRequest.status === 413) {
            setRequestResponse(
              "Message too long!"
            );
            setButtonColor("danger");
            addToast({
              title: "Message Failed to Send!",
              description:
                "Message too long! Ensure your message is less than 1000 characters",
              color: "danger",
              timeout: 5000,
              shouldShowTimeoutProgess: true,
            });
          } else {
            setRequestResponse(
              "Message Failed to Send! Please send me an email and I will get back to you as soon as possible."
            );
            setButtonColor("danger");
            addToast({
              title: "Message Failed to Send!",
              description:
                "Please send me an email and I will get back to you as soon as possible.",
              color: "danger",
              timeout: 5000,
              shouldShowTimeoutProgess: true,
            });
          }
        };
        contactFormRequest.send(JSON.stringify(data));
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
          isDisabled={hasMessageSubmitted}
          isLoading={sendingMessage && !requestResponse}
        >
          {requestResponse
            ? requestResponse
            : sendingMessage
            ? "Sending Message..."
            : "Send Message"}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
