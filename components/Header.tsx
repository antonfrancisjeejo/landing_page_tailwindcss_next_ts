"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaRegWindowClose,
} from "react-icons/fa";
import { TbSquareRoundedLetterP } from "react-icons/tb";
import logo from "@/public/assets/images/logo.png";
import Image from "next/image";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered_2, setIsHovered_2] = useState(false);
  const [isHovered_3, setIsHovered_3] = useState(false);
  const [isHovered_4, setIsHovered_4] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered((curr) => !curr);
  };
  const handleMouseEnter2 = () => {
    setIsHovered_2((curr) => !curr);
  };
  const handleMouseEnter3 = () => {
    setIsHovered_3((curr) => !curr);
  };
  const handleMouseEnter4 = () => {
    setIsHovered_4((curr) => !curr);
  };

  return (
    <nav
      className="bg-white h-[70px] w-full flex shadow sticky top-0 z-10 
  justify-between px-3 py-3"
    >
      <Image
        className="w-24 md:w-36 h-14 object-contain"
        src={logo}
        alt="Logo"
      />
      <div className="md:flex justify-evenly items-center w-1/2 hidden">
        <div className="relative">
          <button
            onClick={handleMouseEnter}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600
          font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Home
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isHovered && (
            <div
              className="z-10 bg-white divide-y rounded-lg shadow w-44
            absolute top-full mt-1"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li onClick={handleMouseEnter}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Dashboard
                  </a>
                </li>
                <li onClick={handleMouseEnter}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Settings
                  </a>
                </li>
                <li onClick={handleMouseEnter}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Earnings
                  </a>
                </li>
                <li onClick={handleMouseEnter}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={handleMouseEnter2}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600
        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            About Us
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isHovered_2 && (
            <div
              className="z-10 bg-white divide-y rounded-lg shadow w-44
            absolute top-full mt-1"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li onClick={handleMouseEnter2}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Dashboard
                  </a>
                </li>
                <li onClick={handleMouseEnter2}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Settings
                  </a>
                </li>
                <li onClick={handleMouseEnter2}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Earnings
                  </a>
                </li>
                <li onClick={handleMouseEnter2}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={handleMouseEnter3}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600
        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Pages
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isHovered_3 && (
            <div
              className="z-10 bg-white divide-y rounded-lg shadow w-44
            absolute top-full mt-1"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li onClick={handleMouseEnter3}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Dashboard
                  </a>
                </li>
                <li onClick={handleMouseEnter3}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Settings
                  </a>
                </li>
                <li onClick={handleMouseEnter3}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Earnings
                  </a>
                </li>
                <li onClick={handleMouseEnter3}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={handleMouseEnter4}
            className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600
        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          >
            Blogs
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isHovered_4 && (
            <div
              className="z-10 bg-white divide-y rounded-lg shadow w-44
            absolute top-full mt-1"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li onClick={handleMouseEnter4}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Dashboard
                  </a>
                </li>
                <li onClick={handleMouseEnter4}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Settings
                  </a>
                </li>
                <li onClick={handleMouseEnter4}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Earnings
                  </a>
                </li>
                <li onClick={handleMouseEnter4}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:text-gray-600 text-gray-500"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <button
          className="text-gray-500 outline-none focus:text-blue-600 active:text-blue-600
        font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Contact
        </button>
      </div>
      <div className="flex md:w-1/3 justify-between items-center">
        <div className="md:flex hidden justify-center border-gray-300 h-full pr-1">
          <button className="bg-blue-600 rounded-full px-3.5 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-3 md:w-4 md:h-5 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
              />
            </svg>
          </button>
          <div className="flex flex-col justify-center pr-1 md:text-sm">
            <p className="text-gray-400">Hot Line Number</p>
            <p className="font-bold text-black">+123 8989 444</p>
          </div>
        </div>
        <button className="border-gray-300 h-full px-3 mx-2 border-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className=" text-gray-400 w-6 h-6  "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

        <button
          className="block md:hidden"
          onClick={() => setToggleMenu((curr) => !curr)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="text-blue-600 p-1 border-blue-600 border  rounded-sm w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <button
          className="md:block hidden"
          onClick={() => setToggleMenu((curr) => !curr)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 hover:text-blue-600 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>
      {toggleMenu && (
        <div className="bg-white w-1/2 md:w-1/4 h-full md:h-ull rounded-md fixed top-0 right-0">
          <div className="p-5">
            <div className="flex justify-between px-2 pt-5">
              <div className="border-b-2 border-blue-500">
                <Image
                  className="w-24 md:w-36 h-14 object-contain"
                  src={logo}
                  alt="logo"
                />
              </div>
              <FaRegWindowClose
                className="text-blue-700 w-8 h-8 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            </div>
            <div className="py-2 mt-3">
              <p className="text-lg font-bold pt-1 text-black">Categories</p>
              <ul className="ml-5 text-base list-disc font-medium py-1 w-[150px] text-gray-500">
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">New Items</li>
                <li className="cursor-pointer">Fashion</li>
                <li className="cursor-pointer">Appliances</li>
              </ul>
            </div>
            <div className="py-2">
              <p className="text-lg font-bold py-1 text-black">Phone Number</p>
              <p className="text-base font-medium py-1 w-[150px] text-gray-500">
                +91 983334534 +91 845345344
              </p>
            </div>
            <div className="py-2">
              <p className="text-lg font-bold py-1 text-black">Email Address</p>
              <p className="text-base font-medium py-1 w-[150px] text-gray-500">
                info@example.com support@example.com
              </p>
            </div>
            <div className="flex justify-between mt-5 w-[85%]">
              <FaFacebookF className="w-8 h-8 text-blue-600 cursor-pointer" />
              <FaTwitter className="w-8 h-8 text-blue-600 cursor-pointer" />
              <FaInstagram className="w-8 h-8 text-blue-600 cursor-pointer" />
              <TbSquareRoundedLetterP className="w-8 h-8 text-blue-600 cursor-pointer" />
              <FaYoutube className="w-8 h-8 text-blue-600 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
