/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navList = [
    { nav: "Beranda", id: "home" },
    { nav: "About", id: "about" },
    { nav: "Blog", id: "blog" },
    { nav: "Project", id: "project" },
    { nav: "Contact", id: "contact" },
  ];

  return (
    <div className="bg-red-300 w-full justify-between pr-6 sm:pr-12 md:pr-0 md:justify-normal z-50 fixed flex flex-row md:gap-16 lg:gap-24  py-5 border-b border-b-gray-200 border-opacity-15 items-center backdrop-blur-lg">
      <Link href="/" passHref>
        <Header>dimasfiebry</Header>
      </Link>
      <button className="md:hidden" onClick={() => setNav(!nav)}>
        <FaBars style={{ color: "#329f9a" }} />
      </button>
      <nav className="hidden md:flex w-full flex-row items-center gap-40">
        <ul className=" lg:px-44 lg:pl-72 md:px-16 flex flex-row justify-between w-full tracking-wide text-sm text-[#c3e7e5]">
          {navList.map((item) => (
            <li key={item.nav} className=" hover:text-[#329f9a] font-medium">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.id);
                }}
              >
                {item.nav}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* mobile */}
      {nav ? (
        <div className="opacity-25 fixed w-full h-screen z-10 top-0 right-0"></div>
      ) : null}
      <div
        className={
          nav
            ? "fixed top-0 w-[80%] right-0 h-screen bg-[#329f9a] z-10 transition-transform ease-in-out duration-700 opacity-95"
            : "fixed top-0 w-[80%] left-[100%] h-screen bg-[#329f9a] z-10 transition-transform ease-in-out duration-700 opacity-10"
        }
      >
        <nav className="w-full gap-8">
          <ul className="flex flex-col mt-5 w-full">
            <li className="w-full flex justify-end px-16 py-1 pb-4">
              <AiOutlineClose
                onClick={() => setNav(false)}
                size={23}
                className="md:hidden font-extrabold cursor-pointer"
              />
            </li>
            {navList.map((item) => (
              <li
                key={item.nav}
                onClick={() => {
                  handleScroll(item.id);
                  setNav(false);
                }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.id);
                  }}
                  className="py-2 px-8 hover:bg-gray-200"
                >
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
