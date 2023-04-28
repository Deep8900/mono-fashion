import React from "react";
import "../index.css";

export const Info = () => {
  return (
    <>
      <section className="h-screen bg-info_bg bg-cover w-[100%] isolate">
        <div className="grid grid-cols-my-col3 h-[100%] max-w-[1440px] mx-auto gap-[5%]">
          <div className="text-black flex flex-col items-center">
            <div className="w-[60%] flex flex-col top-[10%] relative">
              <div>
                <p className="text-[70px] font-Libre leading-none">
                  Why join the
                </p>
                <p className="text-[70px] font-Libre leading-none">
                  <span className="text-[#8CA3F2] italic">new</span> fashion?
                </p>
              </div>
              <div className="flex gap-4 items-start relative right-[-40%] top-[10%] z-10">
                <img src="/img/info-flower.svg" alt="flower" />
                <p className="font-cursive opacity-80 text-justify tracking-tighter">
                  Our designs are geared towards women with an innate sense of
                  style and a preference for bold, out-of-the-ordinary bridal
                  choices. These women know exactly what they want and value
                  quality and ethics over other things; they share our soul.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative isolate w-[100%] h-[100%]">
              <img
                src="/img/info-svg.svg"
                alt="phone-svg"
                className="absolute h-[73%] top-0 z-[-1]"
              />
              <div className="z-10 flex flex-col justify-center items-center h-[100%] w-[100%]">
                <div className="w-[50%] gap-[100px] flex flex-col font-mono">
                  <div>
                    <p className="text-[50px] leading-none">55%</p>
                    <p className="max-w-[300px] text-[17px]">
                      of fast-fashion consumers plan to shift their spend to
                      more sustainable brands
                    </p>
                  </div>
                  <div>
                    <p className="max-w-[300px] text-[17px]">
                      The average millennial intends to re-sell
                    </p>
                    <p className="text-[50px] leading-none">90%</p>
                    <p className="max-w-[300px] text-[17px]">of their fashion purchases</p>
                  </div>
                  <div>
                    <p className="max-w-[300px] text-[17px]">of their fashion purchases</p>
                    <p className="text-[50px] leading-none">20x</p>
                    <p className="max-w-[300px] text-[17px]">of their fashion purchases</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
