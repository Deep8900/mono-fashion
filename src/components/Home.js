import React from "react";
import "../index.css";

export const Home = () => {
  return (
    <>
      <section className="bg-hero min-h-screen w-[100%] bg-top bg-no-repeat bg-cover">
        <nav className="grid max-w-[1440px] mx-auto h-[100px] px-[60px] py-[15px] font-mono grid-cols-my-col1">
          <div className="flex items-center cursor-pointer">
            <a href="/">
              <img src="/img/logo.svg" alt="logo" className="w-[40px]" />
            </a>
          </div>
          <div className="flex justify-between">
            <div className="navbar_con">
              <ul className="flex gap-[30px] h-[100%] items-center">
                <li className="list-none nav_li">
                  <a
                    href="/"
                    className="no-underline text-white text-[16px] cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li className="list-none nav_li">
                  <a
                    href="/"
                    className="no-underline text-white text-[16px] cursor-pointer"
                  >
                    Benefits
                  </a>
                </li>
                <li className="list-none nav_li">
                  <a
                    href="/"
                    className="no-underline text-white text-[16px] cursor-pointer"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-[10px]">
              <button
                type="button"
                className="login_btn px-[10px] py-[5px] text-[12px] cursor-pointer border border-solid border-white text-black bg-white hover:scale-105 transition-all duration-300"
              >
                Login
              </button>
              <button
                type="button"
                className="register_btn px-[10px] py-[5px] text-[12px] cursor-pointer border border-solid border-white text-white bg-transparent hover:scale-105 transition-all duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </nav>
        <div className="text-white max-w-[1440px] mx-auto h-[calc(100vh-100px)] grid gap-[20%] grid-cols-my-col2">
          <div className="relative font-math flex justify-end h-max top-[10%]">
            <div className="flex flex-col items-start">
              <p className="text-[70px] font-Libre leading-none">Join</p>
              <p className="text-[70px] font-Libre  leading-none">
                the
                <span className="text-[#F1E2FA] pl-[20px] italic">future</span>
              </p>
              <p className="max-w-[300px] text-[13px] mt-[25px] font-cursive opacity-80 relative">
                We create timeless, high-quality bridal gowns preserving the
                craft of Couture and valuing the uniqueness of each and every
                one of our clients.
                <img
                  src="/img/hero-shape-2.svg"
                  alt="flower"
                  className="absolute max-h-[70px] bottom-[-150%] right-[10%]"
                />
              </p>
              <button className="mt-[30%] bg-white text-[13px] px-[30px] py-[15px] outline-none border-none cursor-pointer font-bold text-black">
                Enquire Now
              </button>
            </div>
          </div>
          <div className="font-math top-[10%] relative h-max">
            <div className="flex flex-col w-fit items-end">
              <img
                src="/img/hero-shape-1.svg"
                alt="flower"
                className="max-h-[60px] relative right-[10%] mt-[10px]"
              />
              <p className="text-[70px] font-Libre leading-none">
                of <span className="italic text-[#C6E4CD]">sustainable</span>
              </p>
              <p className="text-[70px] font-Libre leading-none">fashion</p>
            </div>
          </div>
        </div>
        <section className="h-[200px] w-[100%] bg-[#F1E2FA] rounded-full">
          <div className="flex justify-evenly items-center h-[100%]">
            <div className="flex flex-col items-center">
              <h3 className="text-[30px] font-bold">Enter Re-commerce</h3>
              <p className="text-[16px] opacity-80">No set up costs & access in seconds</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[30px] font-bold">Be Unique</h3>
              <p className="text-[16px] opacity-80">Stand out, walk away from a million consumption</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[30px] font-bold">Be Sustainable</h3>
              <p className="text-[16px] opacity-80">Environmental impact &n customer insights</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};