import React from "react";
import { BiSolidPyramid } from "react-icons/bi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { GiFlyingBeetle, GiPayMoney } from "react-icons/gi";
import { GoBriefcase } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAgriculture, MdOutlineWaterDrop } from "react-icons/md";
import { PiPopcornBold } from "react-icons/pi";
import { SiHappycow } from "react-icons/si";

const Services = () => {
  return (
    <section className="bg-[#3e3b5a]">
      <div className="py-20">
        <div className="w-full rounded-sm">
          <div className="w-full items-center flex flex-row justify-center">
            <h1 className="font-semibold w-[400px] text-center text-2xl mb-7 md:text-3xl text-[#fff]">
              Serving our client across the diverse industries.
            </h1>
          </div>
          <div className="px-3 md:px-10 grid md:grid-cols-5 grid-cols-3 gap-y-10 gap-3 md:gap-10">
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <FaMicrophoneAlt className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">PUBLISHING</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <GiPayMoney className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">FINANCE</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <GiFlyingBeetle className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">SCIENCES</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <GoBriefcase className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">CONSULTANT</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <PiPopcornBold className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">FOOD</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <SiHappycow className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">DAIRY</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <BiSolidPyramid className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">JEWELLERY</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <MdOutlineWaterDrop className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">ENERGY</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <MdOutlineAgriculture className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">FARMING</p>
            </div>
            <div className="flex flex-col justify-center items-center border-2 rounded-md border-[#605c84] p-10">
              <IoSettingsOutline className="w-10 h-10 text-white" />
              <p className="text-white text-base md:text-lg pt-5">INDUSTRIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
