"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

export default function ContactForm() {
  return (
    <form className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-white">
        Contact Us
      </h2>

      <Input
        label="Full Name"
        placeholder="Enter your full name"
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="you@example.com"
      />

      <Input
        label="Subject"
        placeholder="Subject"
      />

      <Textarea
        label="Message"
        rows={6}
        placeholder="Write your message..."
      />

      <Button
        type="submit"
        fullWidth
      >
        Send Message
      </Button>

    </form>
  );
}