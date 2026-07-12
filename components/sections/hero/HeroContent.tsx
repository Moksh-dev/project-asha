"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex-1 max-w-xl"
    >
      <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
        AWARENESS • SAFETY • HOPE • ACTION
      </span>

      <h1 className="mt-8 text-5xl font-black leading-[1.02] text-white lg:text-7xl">
        Building a
        <br />
        <span className="text-blue-600">Future Free</span>
        <br />
        From Human
        <br />
        Trafficking.
      </h1>

      <p className="mt-8 max-w-lg text-xl leading-9 text-slate-300">
        Project A.S.H.A. empowers young people to prevent human trafficking
        through awareness, education, leadership and community action across
        schools and communities.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          Take A Stand
        </button>

        <button className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
          Learn More
        </button>
      </div>

      <div className="mt-14 flex gap-12">
        <div>
          <h2 className="text-4xl font-black text-blue-600">50K+</h2>
          <p className="mt-1 text-slate-300">
            Lives Impacted
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black text-blue-600">100+</h2>
          <p className="mt-1 text-slate-300">
            Chapters
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black text-blue-600">20+</h2>
          <p className="mt-1 text-slate-300">
            Countries
          </p>
        </div>
      </div>
    </motion.div>
  );
}