"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function TakeAStand() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto w-[90%] max-w-[1280px]">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#1565D8] via-[#1F7AE0] to-[#4FA4F5] px-12 py-20 text-white shadow-2xl lg:px-24"
        >

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold tracking-wide">
              TAKE ACTION
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight lg:text-6xl">
              Change Starts
              <br />
              With You.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-blue-100">
              Join thousands of students, educators and volunteers building
              safer communities through awareness and action.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button className="flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:-translate-y-1">
                Start a Chapter
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-white px-8 py-4 font-semibold transition duration-300 hover:bg-white hover:text-blue-700">
                Become a Volunteer
              </button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}