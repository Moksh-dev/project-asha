"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "50K+",
    label: "People Educated",
  },
  {
    number: "100+",
    label: "Youth Chapters",
  },
  {
    number: "20+",
    label: "Countries",
  },
  {
    number: "500+",
    label: "Awareness Events",
  },
];

export default function Impact() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto w-[90%] max-w-[1280px]">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR IMPACT
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Small Actions.
            <span className="text-blue-600"> Big Change.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-300">
            Every volunteer, workshop and awareness campaign helps create
            safer communities and lasting impact.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              transition={{ duration: .25 }}
              className="rounded-3xl border border-white/10 bg-white p-10 text-center shadow-lg"
            >

              <h3 className="text-5xl font-black text-blue-600">
                {item.number}
              </h3>

              <div className="mx-auto my-5 h-1 w-14 rounded-full bg-blue-100" />

              <p className="text-lg text-slate-300">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}