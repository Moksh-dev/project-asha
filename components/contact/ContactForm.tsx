"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

export default function ContactForm() {
  return (
    <form className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-white">
        Send us a Message
      </h2>

      <Input
        label="Full Name"
        placeholder="John Doe"
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="john@example.com"
      />

      <Input
        label="Subject"
        placeholder="How can we help?"
      />

      <Textarea
        label="Message"
        placeholder="Write your message..."
        rows={6}
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