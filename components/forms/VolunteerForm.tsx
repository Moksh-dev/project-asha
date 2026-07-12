"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";

export default function VolunteerForm() {
  return (
    <form className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-white">
        Volunteer Registration
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

      <Input
        label="City"
        placeholder="Your City"
      />

      <Select
        label="Area of Interest"
        placeholder="Select an option"
        options={[
          {
            label: "Awareness Campaigns",
            value: "awareness",
          },
          {
            label: "Community Outreach",
            value: "community",
          },
          {
            label: "Content Creation",
            value: "content",
          },
          {
            label: "Fundraising",
            value: "fundraising",
          },
          {
            label: "Chapter Leadership",
            value: "leadership",
          },
        ]}
      />

      <Textarea
        label="Why do you want to volunteer?"
        rows={6}
        placeholder="Tell us about yourself..."
      />

      <Button
        type="submit"
        fullWidth
      >
        Submit Application
      </Button>

    </form>
  );
}