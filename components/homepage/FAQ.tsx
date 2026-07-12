"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/layout/sections/Section";
import SectionContainer from "@/components/layout/sections/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

const faqs = [
  {
    question: "What is Project A.S.H.A.?",
    answer:
      "Project A.S.H.A. is a youth-led movement focused on creating awareness against human trafficking through education, leadership and community engagement.",
  },
  {
    question: "Who can join Project A.S.H.A.?",
    answer:
      "Students, professionals, educators and anyone passionate about creating social impact can become a volunteer or member.",
  },
  {
    question: "How can I start a chapter?",
    answer:
      "Simply apply through the Join page. Our team will guide you through the onboarding process and provide all required resources.",
  },
  {
    question: "Can I volunteer remotely?",
    answer:
      "Yes. We offer opportunities in content creation, awareness campaigns, research, design, social media and other remote initiatives.",
  },
  {
    question: "How are donations used?",
    answer:
      "Donations help organize awareness campaigns, volunteer training, educational resources and expansion of Project A.S.H.A. chapters.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section background="white">

      <SectionContainer>

        <SectionHeader
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Everything you need to know before joining Project A.S.H.A."
        />

        <div className="mx-auto max-w-4xl space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-sm"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {open === index && (
                <div className="border-t border-white/10 px-6 py-5">

                  <p className="leading-7 text-slate-300">
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>

          ))}

        </div>

      </SectionContainer>

    </Section>
  );
}