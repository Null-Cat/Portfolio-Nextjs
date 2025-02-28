"use client";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Input, Textarea } from "@heroui/react";

const ContactForm = () => {
  return (
    <Form
      className="flex flex-col justify-center items-center h-full"
      validationBehavior="aria"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Message sent!");
      }}
    >
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 border border-default-100 backdrop-blur p-4 rounded-lg w-[90%]">
        <Input
          isRequired
          isClearable
          label="Name"
          labelPlacement="outside"
          placeholder="Your Name"
          type="text"
        />
        <Input
          isRequired
          isClearable
          label="Email"
          labelPlacement="outside"
          placeholder="example@domain.com"
          startContent={
            <FontAwesomeIcon className="w-4 h-4" icon={faEnvelope} />
          }
          type="email"
        />
        <Input
          isRequired
          isClearable
          className="col-span-2"
          label="Subject"
          labelPlacement="outside"
          placeholder="Let's talk about..."
          type="text"
        />
        <Textarea
          isRequired
          isClearable
          className="col-span-2"
          label="Message"
          labelPlacement="outside"
          placeholder="Your message here..."
          minRows={5}
        />
        <Button
          className="col-span-2"
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
