import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 bg-zinc-300 md:py-20">
      <div className="w-full px-6 md:px-20 border-b-[1px] border-zinc-500 pb-8 md:pb-12">
        <h1 className="text-4xl md:text-7xl font-['Neue_Montreal'] tracking-tight text-black">
          Featured Projects
        </h1>
      </div>

      <div className="px-6 md:px-14">
        <div className="cards w-full flex flex-col gap-6 mt-8 md:flex-row md:gap-10 md:mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-full h-64 md:w-1/2 md:h-[40vw]"
          >
            <h1 className="absolute hidden md:flex text-[#b8d844] overflow-hidden font-bold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-founders-grotesk text-5xl md:text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-full h-64 md:w-1/2 md:h-[40vw]"
          >
            <h1 className="absolute hidden md:flex text-[#b8d844] overflow-hidden font-bold left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-founders-grotesk text-5xl md:text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="cardtwo">
        <div className="px-6 py-10 md:px-14 md:py-16">
          <div className="cards w-full flex flex-col gap-6 mt-8 md:flex-row md:gap-10 md:mt-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer relative w-full h-64 md:w-1/2 md:h-[40vw]"
            >
              <h1 className="absolute hidden md:flex text-[#b8d844] font-bold left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-founders-grotesk text-5xl md:text-8xl">
                {"TRAWA".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                  alt=""
                />
              </div>
            </motion.div>
            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer relative w-full h-64 md:w-1/2 md:h-[40vw]"
            >
              <h1 className="absolute hidden md:flex overflow-hidden text-[#b8d844] font-bold left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tight font-founders-grotesk text-5xl md:text-8xl">
                {"PREMIUM BLEND".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <button className="flex gap-3 justify-center hover:bg-gray-800 md:gap-10 uppercase items-center px-4 md:px-6 py-2 md:py-3 bg-zinc-900 rounded-full mt-4 md:mt-16 text-white mx-auto">
        Read More
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
      </button>
    </div>
  );
}

export default Featured;
