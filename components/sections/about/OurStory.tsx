"use client";

import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto w-[90%] max-w-[1280px]">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            OUR STORY
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">
            Every Movement
            <span className="text-blue-600"> Starts </span>
            With One Step.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Project A.S.H.A. began with one simple belief:
            young people have the power to create lasting change.
            Today, that belief has grown into a movement inspiring
            awareness, leadership and action across communities.
          </p>

        </motion.div>

        {/* Content */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt=""
              className="h-[620px] w-full rounded-[32px] object-cover shadow-xl"
            />

          </motion.div>

          {/* Timeline */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="space-y-8"
          >

            <div className="rounded-[28px] border border-white/10 bg-white p-10 shadow-lg">

              <div className="mb-5 flex items-center gap-4">

                <div className="h-4 w-4 rounded-full bg-blue-600" />

                <h3 className="text-3xl font-bold text-white">
                  Our Beginning
                </h3>

              </div>

              <p className="leading-8 text-slate-300">
                Founded in San Francisco, Project A.S.H.A. started with
                students determined to spread awareness and prevent
                human trafficking through education.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-white p-10 shadow-lg">

              <div className="mb-5 flex items-center gap-4">

                <div className="h-4 w-4 rounded-full bg-blue-600" />

                <h3 className="text-3xl font-bold text-white">
                  Growing Worldwide
                </h3>

              </div>

              <p className="leading-8 text-slate-300">
                Today our chapters empower students, educators and
                volunteers across countries to build safer communities
                through awareness campaigns and local initiatives.
              </p>

            </div>

            <div className="rounded-[28px] border border-white/10 bg-blue-600 p-10 text-white shadow-xl">

              <h3 className="text-3xl font-bold">
                Our Future
              </h3>

              <p className="mt-5 leading-8 text-blue-100">
                We continue expanding our impact by creating more youth
                chapters, partnerships and educational programs around
                the world.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}