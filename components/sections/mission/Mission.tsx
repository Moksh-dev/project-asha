"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Protect",
    text: "Creating awareness to prevent human trafficking before it begins.",
  },
  {
    icon: GraduationCap,
    title: "Educate",
    text: "Empowering students, teachers and communities through workshops.",
  },
  {
    icon: HeartHandshake,
    title: "Act",
    text: "Helping young people start chapters and create real impact locally.",
  },
];

export default function Mission() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto w-[90%] max-w-[1280px]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR MISSION
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Awareness.
            <span className="text-blue-600"> Action.</span>
            Hope.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            We empower young people to spread awareness, educate communities,
            and lead initiatives that create safer futures.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-10 md:grid-cols-3">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-white/10 bg-white p-10 shadow-lg transition"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {card.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {card.text}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}