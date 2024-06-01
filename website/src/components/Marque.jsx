import { motion } from 'framer-motion';
import React from 'react'

function Marque() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-14 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-500 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[14vw] leading-none font-founders-grotesk pt-5 mb-3 uppercase font-bold pr-20"
        >
          We are developers
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className="text-[14vw] leading-none font-founders-grotesk pt-5 mb-3 uppercase font-bold pr-20"
        >
          We are developers
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque