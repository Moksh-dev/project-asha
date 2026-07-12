"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-[#F7FBFF] py-32">

      <div className="mx-auto w-[90%] max-w-[1280px]">

        {/* Header */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR PURPOSE
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Vision &
            <span className="text-blue-600"> Mission</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Everything we do is guided by one vision and driven by one mission:
            creating safer communities through awareness, education and youth
            leadership.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">

          {/* Vision */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: .25 }}
            className="rounded-[32px] border border-white/10 bg-white p-12 shadow-lg"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">

              <Eye
                className="text-blue-600"
                size={30}
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <div className="my-6 h-1 w-16 rounded-full bg-blue-600" />

            <p className="text-lg leading-9 text-slate-300">
              A world where every person lives free from human trafficking,
              child labour and violence against women, empowered through
              education, awareness and compassionate action.
            </p>

          </motion.div>

          {/* Mission */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: .25 }}
            className="rounded-[32px] bg-gradient-to-br from-[#1565D8] via-[#1F7AE0] to-[#4FA4F5] p-12 text-white shadow-xl"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">

              <Target
                className="text-white"
                size={30}
              />

            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Our Mission
            </h3>

            <div className="my-6 h-1 w-16 rounded-full bg-white/70" />

            <p className="text-lg leading-9 text-blue-100">
              We educate communities, build youth leadership, establish local
              chapters and inspire meaningful action through awareness
              campaigns, partnerships and volunteer initiatives.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}