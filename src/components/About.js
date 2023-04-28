import React from "react";
import "../index.css";

export const About = () => {
  return (
    <>
      <section className="bg-[#071112] h-screen">
        <div className="grid grid-cols-my-col3 h-[100%] max-w-[1440px] mx-auto gap-[5%]">
          <div className="text-white flex flex-col justify-center items-center">
            <div className="w-[60%] flex flex-col">
              <div className="flex gap-4 items-end font-Libre">
                <h2 className="text-[70px] leading-none">Our</h2>
                <img
                  src="/img/about-svg.svg"
                  alt="flower"
                  className="max-h-[45px]"
                />
              </div>
              <div className="self-end">
                <h2 className="text-[70px] leading-none font-Libre">
                  philosophy
                </h2>
              </div>
              <div className="w-fit font-cursive opacity-80 mt-[30px]">
                <p className="text-justify mb-[10px]">
                  We create timeless, high-quality bridal gowns preserving the
                  craft of Couture and valuing the uniqueness of each and every
                  one of our clients. There are no two women alike, so why
                  should their dresses be.
                </p>
                <p className="text-justify">
                  Our designs are geared towards women with an innate sense of
                  style and a preference for bold, out-of-the-ordinary choices.
                  These women know exactly what they want and value quality and
                  ethics over other things; they share our soul.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative isolate w-[100%] h-[100%]">
              <img
                src="/img/iphone 14.png"
                alt="iPhone"
                className="absolute z-10 h-[70%] left-[10%] bottom-[10%]"
              />
              <img
                src="/img/phone-svg.svg"
                alt="phone-svg"
                className="absolute z-5 h-[70%] bottom-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
