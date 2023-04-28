import React from "react";

export const Action = () => {
  return (
    <>
      <section className="bg-action-bg w-[100%] h-[100%] bg-cover bg-center">
        <div className="w-[100%] h-[100%^] flex flex-col justify-center items-center text-white gap-[30px] py-[100px]">
          <div className="text-center">
            <h2 className="text-[70px] font-Libre font-bold leading-none">Join the</h2>
            <h2 className="text-[70px] font-Libre font-bold leading-none">
              <span>New</span>Fashion
            </h2>
          </div>
          <p className="max-w-[400px] text-center font-cursive text-[17px]">
            All of our dresses are made to order ethically and sustainably in
            our Atelier in Barcelona
          </p>
          <button className="px-[40px] py-[10px] bg-black font-mono text-[17px] mt-[20px]">Join Now</button>
        </div>
      </section>
    </>
  );
};
