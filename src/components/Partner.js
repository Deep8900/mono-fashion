import React from "react";

export const Partner = () => {
  return (
    <>
      <section className="w-[100%] h-[100%] bg-black">
        <div className="flex flex-col items-center justify-center w-[100%] pb-[100px]">
          <div className="w-[80%] mx-auto">
            <h2 className="text-[70px] font-Libre text-center text-white">
              We trusted <span className="italic text-[#8CA3F2]">by</span>
            </h2>
            <div className="flex flex-wrap gap-[10px] justify-center mt-[30px]">
              <img src="/img/frame1.png" alt="frame" className="w-[250px]"/>
              <img src="/img/frame2.png" alt="frame" className="w-[250px]"/>
              <img src="/img/frame3.png" alt="frame" className="w-[250px]"/>
              <img src="/img/frame4.png" alt="frame" className="w-[250px]"/>
              <img src="/img/frame5.png" alt="frame" className="w-[250px]"/>
              <img src="/img/frame6.png" alt="frame" className="w-[250px]"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
