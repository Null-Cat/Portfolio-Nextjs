"use client";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Textarea } from "@heroui/react";
import { useRef, useState } from "react";

const ContactForm = () => {
  const [hasMessageSubmitted, setHasMessageSubmitted] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [requestResponse, setRequestResponse] = useState("");
  return (
    <Form
      className="flex flex-col justify-center items-center h-full"
      onSubmit={(e) => {
        e.preventDefault();
        setHasMessageSubmitted(true);
        setSendingMessage(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (response.status === 200) {
              setRequestResponse("Message Sent!");
            } else if (response.status === 413) {
              setRequestResponse(
                "Message too long! Ensure your message is less than 1000 characters"
              );
            } else {
              setRequestResponse("Message Failed to Send");
            }
          })
          .catch(() => {
            setRequestResponse("Message Failed to Send");
          })
          .finally(() => {
            setSendingMessage(false);
          });
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
          color="primary"
          variant="shadow"
          type="submit"
          endContent={
            hasMessageSubmitted ? null : <FontAwesomeIcon icon={faPaperPlane} />
          }
          isDisabled={hasMessageSubmitted}
          isLoading={sendingMessage && !requestResponse}
        >
          {sendingMessage
            ? "Sending Message..."
            : requestResponse
            ? requestResponse
            : "Send Message"}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
