import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

export const Detail = () => {
  return (
    <>
      <section className="h-screen w-[100%] isolate bg-black">
        <div className="grid grid-cols-my-col4 h-[100%] max-w-[1440px] mx-auto">
          <div className="text-white flex flex-col items-center justify-center">
            <div className="w-[60%] flex flex-col relative gap-[50px]">
              <div className="font-Libre flex flex-col gap-[5px]">
                <p className="text-[70px] leading-none">
                  Why <span className="text-[#FCE3C8] italic">clients</span>
                </p>
                <div className="flex gap-4 self-center">
                  <img src="/img/Detail-svg.svg" alt="flower" />
                  <p className="text-[70px] leading-none">with</p>
                </div>
                <p className="text-[70px] leading-none">Brandy?</p>
              </div>
              <p className="font-cursive opacity-80 tracking-tighter text-justify">
                We create timeless, high-quality bridal gowns preserving the
                craft of Couture and valuing the uniqueness of each and every
                one of our clients. There are no two women alike, so why should
                their wedding dresses be.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center w-[100%] font-mono gap-[30px]">
            <div className="bg-[#C6E4CD] w-[80%] p-[35px] rounded-tr-full rounded-br-full">
              <h3 className="mb-[20px] text-[20px]">Circular partner benefits</h3>
              <div className="text-[14px] flex flex-col gap-[15px]">

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">
                    Free delivery: For any orders over 100 euros in the Benelux
                  </p>
                </div>

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">Secure Payment: Mastercard, Maestro, Paypal & Visa</p>
                </div>

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">
                    Worldwide Shipping Belgium, France, Luxemburg, Netherlands,
                    Germany, United States
                  </p>
                </div>

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">
                    Return in 14 days You can return your items within 14 days
                    of receiving your parcel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F1E2FA] w-[80%] p-[35px] rounded-tl-full rounded-bl-full pl-[40px]">
              <h3 className="mb-[20px] text-[20px]">The business impact</h3>
              <div className="text-[14px] flex flex-col gap-[15px]">

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">40% increase in average order value</p>
                </div>

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">15% conversion lift</p>
                </div>

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">15% conversion lift</p>
                </div>

                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon icon={faShare} size="xs" />
                  <p className="mt-[-2px] leading-none">Reduce your Scope 3 emissions and after-market waste</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
