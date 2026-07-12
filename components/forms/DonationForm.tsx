"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

export default function DonationForm() {
  return (
    <form className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-white">
        Make a Donation
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
        label="Phone Number"
        placeholder="+91 XXXXX XXXXX"
      />

      <Select
        label="Donation Amount"
        placeholder="Select an amount"
        options={[
          { label: "₹500", value: "500" },
          { label: "₹1,000", value: "1000" },
          { label: "₹2,500", value: "2500" },
          { label: "₹5,000", value: "5000" },
          { label: "₹10,000+", value: "10000+" },
        ]}
      />

      <Textarea
        label="Message (Optional)"
        rows={4}
        placeholder="Leave a message..."
      />

      <Button
        type="submit"
        fullWidth
      >
        Proceed to Donate
      </Button>

    </form>
  );
}