"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";

export default function ChapterForm() {
  return (
    <form className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-bold text-white">
        Start a New Chapter
      </h2>

      <Input
        label="Full Name"
        placeholder="Enter your name"
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
        label="College / Organization"
        placeholder="Your college or organization"
      />

      <Input
        label="City"
        placeholder="Your city"
      />

      <Input
        label="State"
        placeholder="Your state"
      />

      <Select
        label="Expected Team Size"
        placeholder="Select team size"
        options={[
          { label: "5-10 Members", value: "5-10" },
          { label: "10-20 Members", value: "10-20" },
          { label: "20-50 Members", value: "20-50" },
          { label: "50+ Members", value: "50+" },
        ]}
      />

      <Textarea
        label="Why do you want to start a chapter?"
        rows={6}
        placeholder="Tell us about your vision..."
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