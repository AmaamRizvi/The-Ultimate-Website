import React from "react";

function About() {
  return (
    <div className="w-full p-6 md:p-10 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[8vw] md:text-[6vw] lg:text-[4vw] font-['Neue_Montreal'] leading-[10vw] md:leading-[7vw] lg:leading-[4.5vw] tracking-tight mb-3 md:mb-5">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="text-base md:text-lg w-full md:w-[85vw] pt-4 md:pt-6 border-t-[1px] border-b-[1px] border-[#a1b562] gap-6 md:gap-10 font-['Neue_Montreal'] overflow-hidden whitespace-nowrap">
        <div className="text flex justify-between mt-3">
          <h1>What you can expect:</h1>
        </div>
        <div className="mt-4 md:mt-6">
          <h1 className="w-full md:w-[85vw]">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors.
          </h1>
        </div>
        <div className="mt-3 md:mt-3 mb-6 md:mb-10">
          <h1>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </h1>
        </div>
      </div>
      <div className="w-full mt-8 md:mt-10 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Our approach:</h1>
          <button className="flex gap-3 hover:bg-gray-800 md:gap-10 uppercase items-center px-4 md:px-6 py-2 md:py-3 bg-zinc-900 rounded-full mt-4 md:mt-6 text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="rounded-lg h-[50vw] md:h-[30vw] w-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Ochi design"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
