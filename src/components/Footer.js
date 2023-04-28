import React from "react";

export const Footer = () => {
  return (
    <>
      <section className="bg-black w-[100%] h-[100%]">
        <div className="px-[100px] py-[60px] w-[100%] h-[100%] text-white">
          <div className="font-mono flex justify-between text-[14px] items-start p-[20px] border-b border-slate-600">
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:border-b w-fit">Help</li>
              <li className="cursor-pointer hover:border-b w-fit">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:border-b w-fit">
                Contact Us
              </li>
            </ul>
            <a href="/">
              <img src="/img/logo.svg" alt="Logo" className="h-[35px]" />
            </a>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:border-b w-fit">Facebook</li>
              <li className="cursor-pointer hover:border-b w-fit">Instagram</li>
              <li className="cursor-pointer hover:border-b w-fit">Pinterest</li>
            </ul>
          </div>
          <div className="p-[20px]">
            <p>&copy; 2023 Brandy</p>
          </div>
        </div>
      </section>
    </>
  );
};
