"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7FBFF] pt-36 pb-28">

      {/* Background */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-100/70 blur-[140px]" />
      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-100/70 blur-[140px]" />

      <div className="relative mx-auto grid w-[90%] max-w-[1280px] items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
        >

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700">
            ABOUT PROJECT A.S.H.A.
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.02] text-white lg:text-7xl">
            Hope.
            <br />
            Action.
            <br />
            <span className="text-blue-600">
              Change.
            </span>
          </h1>

          <p className="mt-8 border-l-4 border-blue-600 pl-5 text-2xl italic text-blue-600">
            Built by youth.
            <br />
            Driven by purpose.
          </p>

          <p className="mt-10 max-w-xl text-xl leading-9 text-slate-300">
            Project A.S.H.A. is a global youth-led initiative committed to
            preventing human trafficking, child labour and violence against
            women through awareness, education, leadership and meaningful
            community action.
          </p>

          <button className="mt-12 flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700">

            Explore Our Story

            <ArrowRight size={20} />

          </button>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="relative"
        >

          <div className="overflow-hidden rounded-[32px] border border-white bg-white p-3 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Project ASHA"
              className="h-[560px] w-full rounded-[24px] object-cover"
            />

          </div>

          {/* Card */}

          <div className="absolute -left-8 top-10 rounded-3xl bg-white p-6 shadow-xl">

            <h2 className="text-4xl font-black text-blue-600">
              2017
            </h2>

            <p className="mt-2 text-slate-300">
              Founded in
              <br />
              San Francisco
            </p>

          </div>

          <div className="absolute -right-8 bottom-10 rounded-3xl bg-white p-6 shadow-xl">

            <h2 className="text-4xl font-black text-blue-600">
              20+
            </h2>

            <p className="mt-2 text-slate-300">
              Global Chapters
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}