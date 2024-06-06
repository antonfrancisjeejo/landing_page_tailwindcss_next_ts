import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`${
        isVisible ? " block" : "hidden"
      } fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-600 text-white p-2.5 rounded-full shadow-md transition duration-300 ease-in-out z-50`}
    >
      <FaArrowUp size={26} />
    </button>
  );
};

export default ScrollToTop;
