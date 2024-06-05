import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import c_1 from "@/public/assets/images/case/case-1.png";
import c_2 from "@/public/assets/images/case/case-2.png";
import c_3 from "@/public/assets/images/case/case-3.png";
import c_4 from "@/public/assets/images/case/c_4.jpg";
import c_5 from "@/public/assets/images/case/c_5.jpg";
import c_6 from "@/public/assets/images/case/c_6.jpg";
import c_7 from "@/public/assets/images/case/c_7.jpg";
import c_8 from "@/public/assets/images/case/c_8.jpg";
import Image from "next/image";

const RecentCases = () => {
  return (
    <section className="py-20">
      <div className="container px-16">
        <Tabs>
          <div className="md:flex-row flex justify-between flex-col mb-12">
            <h1 className="text-3xl font-semibold text-gray-800">
              Recent case studies
            </h1>
            <TabList className="border-0">
              <Tab>All</Tab>
              <Tab>Selected</Tab>
              <Tab>Digital</Tab>
              <Tab>Branding</Tab>
              <Tab>Web</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className="grid ld:grid-cols-4 main_img lg:grid-rows-2 md:grid-cols-3 sm:grid-cols-2 gap-9">
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_1}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_2}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_3}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_4}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_5}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_6}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_7}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_8}
                  alt="Not found"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-9">
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_1}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_2}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_3}
                  alt="Not found"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-9">
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_6}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_7}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_8}
                  alt="Not found"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-9">
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_4}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_5}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_6}
                  alt="Not found"
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-9">
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_1}
                  alt="Not found"
                />
              </div>
              <div className="w-full h-[300px] hover:scale-110 transition-all duration-300 cursor-pointer bg-white">
                <Image
                  className="w-full h-full object-contain shadow-lg rounded-md"
                  src={c_2}
                  alt="Not found"
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default RecentCases;
