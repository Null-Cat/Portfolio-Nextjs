"use client";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Textarea } from "@heroui/react";

const ContactForm = () => {
  return (
    <Form
      className="flex flex-col justify-center items-center h-full"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent!");
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border border-default-100 backdrop-blur p-4 rounded-lg lg:w-[90%] w-full">
        <Input
          isRequired
          isClearable
          variant="bordered"
          label="Name"
          labelPlacement="outside"
          placeholder="Your Name"
          type="text"
        />
        <Input
          isRequired
          isClearable
          variant="bordered"
          label="Email"
          labelPlacement="outside"
          placeholder="example@domain.com"
          startContent={
            <FontAwesomeIcon className="w-4 h-4" icon={faEnvelope} />
          }
          type="email"
          errorMessage="Please enter a valid email address"
        />
        <Input
          isRequired
          isClearable
          className="sm:col-span-2"
          variant="bordered"
          label="Subject"
          labelPlacement="outside"
          placeholder="Let's talk about..."
          type="text"
        />
        <Textarea
          isRequired
          isClearable
          className="sm:col-span-2"
          variant="bordered"
          label="Message"
          labelPlacement="outside"
          placeholder="Your message here..."
          minRows={5}
        />
        <Button
          className="sm:col-span-2"
          color="primary"
          variant="shadow"
          type="submit"
          endContent={<FontAwesomeIcon icon={faPaperPlane} />}
        >
          Send Message
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
