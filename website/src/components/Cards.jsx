import React from "react";

function Cards() {
  return (
    <div className="w-full min-h-screen bg-zinc-400 flex flex-col md:flex-row items-center px-4 md:px-16 gap-5">
      <div className="cardcontainer w-full md:w-1/2 h-[60vh] md:h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex flex-col items-center justify-center">
          <img
            className="w-24 md:w-32 mb-4 md:mb-0"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="Logo 001"
          />
          <button className="mt-2 md:absolute md:left-10 px-2 md:px-4 py-1 border-2 rounded-full md:bottom-10 border-yellow-100 hover:border-yellow-300">
            ©2024-205
          </button>
        </div>
      </div>
      <div className="cardcontainer flex flex-col md:flex-row gap-5 w-full md:w-1/2 h-[60vh] md:h-[50vh]">
        <div className="card relative flex flex-col items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#051110]">
          <img
            className="w-24 md:w-32 mb-4 md:mb-0"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="Logo 002"
          />
          <button className="mt-2 md:absolute md:left-12 px-2 md:px-4 py-1 border-2 rounded-full md:bottom-10 border-yellow-100 hover:border-yellow-300">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative flex flex-col items-center justify-center rounded-xl w-full md:w-1/2 h-full bg-[#051110]">
          <img
            className="w-24 md:w-32 mb-4 md:mb-0"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="Logo 003"
          />
          <button className="mt-2 md:absolute md:left-20 px-2 md:px-4 py-1 border-2 rounded-full md:bottom-10 border-yellow-100 hover:border-yellow-300">
            BOOTCAMPS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
