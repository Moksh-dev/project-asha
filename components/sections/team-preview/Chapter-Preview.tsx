"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const chapters = [
  {
    title: "San Francisco",
    subtitle: "Founding Chapter",
    color: "from-[#1565D8] to-[#4FA4F5]",
  },
  {
    title: "Haryana",
    subtitle: "India",
    color: "from-[#2D7BE8] to-[#67B4FF]",
  },
  {
    title: "Toronto",
    subtitle: "Canada",
    color: "from-[#4FA4F5] to-[#90D1FF]",
  },
];

export default function ChapterPreview() {
  return (
    <section className="bg-[#F7FBFF] py-32">

      <div className="mx-auto w-[90%] max-w-[1280px]">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            GLOBAL CHAPTERS
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Building
            <span className="text-blue-600"> Change </span>
            Worldwide
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Every chapter is powered by passionate students and volunteers
            creating safer communities around the world.
          </p>

        </div>

        <div className="mt-24 grid gap-10 lg:grid-cols-3">

          {chapters.map((chapter) => (

            <motion.div
              key={chapter.title}
              whileHover={{ y: -8 }}
              transition={{ duration: .25 }}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white shadow-lg"
            >

              <div
                className={`h-48 bg-gradient-to-br ${chapter.color}`}
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white">
                  {chapter.title}
                </h3>

                <p className="mt-2 text-slate-300">
                  {chapter.subtitle}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">

                  Explore Chapter

                  <ArrowRight size={18} />

                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}