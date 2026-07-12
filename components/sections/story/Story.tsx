"use client";

import { motion } from "framer-motion";

export default function Story() {
  return (
    <section className="bg-[#F7FBFF] py-32">

      <div className="mx-auto grid w-[90%] max-w-[1280px] items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR STORY
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            A Movement
            <br />
            Started By
            <span className="text-blue-600"> Youth.</span>
          </h2>

          <p className="mt-8 border-l-4 border-blue-600 pl-5 text-2xl italic text-blue-600">
            "Silence protects traffickers.
            <br />
            Awareness protects people."
          </p>

          <p className="mt-10 max-w-xl text-xl leading-9 text-slate-300">
            Project A.S.H.A. started with one belief:
            young people have the power to prevent
            human trafficking through awareness,
            education and collective action.
          </p>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="grid grid-cols-2 gap-6"
        >

          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
            className="h-[250px] w-full rounded-[28px] object-cover shadow-xl"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80"
            className="mt-10 h-[320px] w-full rounded-[28px] object-cover shadow-xl"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
            className="-mt-10 h-[320px] w-full rounded-[28px] object-cover shadow-xl"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            className="h-[250px] w-full rounded-[28px] object-cover shadow-xl"
            alt=""
          />

        </motion.div>

      </div>

    </section>
  );
}