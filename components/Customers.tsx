import React from "react";
import { LuCircleDot } from "react-icons/lu";
import Rating from "@/public/assets/images/rating.png";
import Image from "next/image";
import c_1 from "@/public/assets/images/coustomer/c-1.png";
import c_2 from "@/public/assets/images/coustomer/c-2.png";
import c_3 from "@/public/assets/images/coustomer/c-3.png";

const Customers = () => {
  return (
    <section className="py-20 shadow container px-16">
      <div className="flex justify-center py-3">
        <LuCircleDot className="text-[#acaa3ea0] w-12 h-12" />
        <div className="pl-5 flex flex-col justify-center items-center">
          <p className="text-[#d8d46f] text-lg font-semibold">
            SATISFIED CUSTOMERS
          </p>
          <h1 className="text-4xl font-bold text-black">Rewarding Cases</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-5">
        <div className="mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image src={Rating} className="h-24 w-24 -mb-7" alt="rating" />
            <h5 className="md:text-xl text-black font-semibold tracking-tight">
              Premium Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="h-20 w-20">
                <Image
                  alt="user"
                  src={c_1}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Mathew Taylor
                </p>
                <p className="text-lg text-gray-500 font-normal">Expert</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image src={Rating} className="h-24 w-24 -mb-7" alt="rating" />
            <h5 className="md:text-xl text-black font-semibold tracking-tight">
              Code Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="h-20 w-20">
                <Image
                  alt="user"
                  src={c_2}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">
                  Shoko Mugikura
                </p>
                <p className="text-lg text-gray-500 font-normal">Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-2 bg-white border border-gray-200 rounded-lg shadow relative flex flex-col justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-start">
            <Image src={Rating} className="h-24 w-24 -mb-7" alt="rating" />
            <h5 className="md:text-xl text-black font-semibold tracking-tight">
              Creative Quality
            </h5>
            <p className="mb-3 font-normal text-gray-700 border-b-2 border-gray-300 text-xs py-5 md:text-lg">
              Here are the biggest enterprise technology acquisitions of 2021
              order.
            </p>
            <div className="flex justify-center items-center">
              <div className="h-20 w-20">
                <Image
                  alt="user"
                  src={c_3}
                  className="w-full h-full rounded-full object-cover shadow-md p-1"
                />
              </div>
              <div className="ml-2">
                <p className="text-lg text-black font-semibold">Jacob Dilong</p>
                <p className="text-lg text-gray-500 font-normal">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
