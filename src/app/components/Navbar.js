"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import FillButton from "./FillButton";

function Navbar() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Rooms", link: "/rooms" },
    { name: "To-Do", link: "/todo" },
    { name: "About", link: "/about" },
    { name: "Contact ", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4  md:px-10 px-7">
        <h1 className="text-3xl font-bold text-amber-700">CFK NYA RESORTS</h1>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4
        absolute md:static bg-white  x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-4">
              <a
                href={link.link}
                className="text-gray-800 hover:text-amber-950 duration-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="z-50">
          <FillButton name={"BOOK NOW"} link={"/reservation"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
