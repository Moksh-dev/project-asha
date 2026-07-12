"use client";

import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-1 justify-center"
    >
      <div className="overflow-hidden rounded-[32px] bg-white shadow-xl border border-white/10">

        <img
          src="/images/hero.jpg"
          alt="Project ASHA Volunteers"
          className="h-[520px] w-[520px] object-cover"
        />

      </div>

    </motion.div>
  );
}