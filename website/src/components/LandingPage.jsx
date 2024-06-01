import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-20 md:mt-40 px-5 md:px-20">
        <div className="masker">
          <h1 className="uppercase text-5xl md:text-7xl leading-[8vw] md:leading-[5.5vw] tracking-tighter font-founders-grotesk font-bold">
            We Create
          </h1>
        </div>

        <div className="masker mt-4 md:mt-0">
          <div className="w-fit flex items-center">
            <motion.div initial={{width: 0}} animate={{width: "10vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className="w-[15vw] h-[7vw] md:w-[6vw] md:h-[3vw] lg:w-[8vw] lg:h-[4.5vw] rounded-sm bg-red-500"></motion.div>
            <h1 className="uppercase text-5xl md:text-7xl leading-[8vw] md:leading-[5.5vw] ml-2 tracking-tighter font-founders-grotesk font-bold">
              Eye Opening
            </h1>
          </div>
        </div>
        <div className="masker mt-4 md:mt-0">
          <h1 className="uppercase text-5xl md:text-7xl leading-[8vw] md:leading-[5.5vw] tracking-tighter font-founders-grotesk font-bold">
            Presentations
          </h1>
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-11">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-sm md:text-md font-light tracking-tighter leading-none text-center md:text-left mt-2 md:mt-0"
          >
            {item}
          </p>
        ))}
        <div className="start flex flex-col md:flex-row items-center gap-4 mt-5 md:mt-0">
          <div className="px-5 py-2 border-[2px] cursor-pointer hover:bg-zinc-800 hover:animate-bounce border-zinc-700 font-light text-sm md:text-md uppercase rounded-full">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center p-2 border-[2px] cursor-pointer hover:bg-zinc-800 border-zinc-700 rounded-full">
            <span className="rotate-[45deg] hover:animate-bounce">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
