"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import home1 from "../../public/emvy.png";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between relative  md:h-10 md:items-center font-bold">
      <div
        onClick={() => setNav(false)}
        className="z-50 cursor-pointer text-3xl ml-2"
      >
        <Link href="/">
          <Image src={home1} alt="Logo of Emvel" width={60} height={50} />
        </Link>
      </div>
      <div
        onClick={handleClick}
        className="flex cursor-pointer z-50 md:hidden text-3xl mr-3 mt-2"
      >
        {nav ? <MdClose /> : <MdMenu />}
      </div>
      <ul className=" hidden md:flex md:justify-center ">
        <li className=" mr-2 text-zinc-900 hover:text-green-600">
          <Link href="/products">Products</Link>
        </li>
        <li className=" text-zinc-900 hover:text-green-600  mr-2">
          <Link href="/about">About Us</Link>
        </li>
      </ul>
      {nav && (
        <div className=" bg-white h-screen text-center w-screen block ease-in duration-500 fixed md:hidden ">
          <ul className="mt-64" onClick={handleClick}>
            <li className="mb-2 border-b text-zinc-800 hover:text-green-600 ">
              <Link href="/">Home</Link>
            </li>
            <li className="mb-2 border-b- text-zinc-800  hover:text-green-600">
              <Link href="/products">Products</Link>
            </li>
            {/* <li className="mb-2  border-b text-zinc-600 hover:text-zinc-800 transition-colors ">
              <Link href="/contact">Contact Us</Link>
            </li> */}
            <li className="mb-2  border-b text-zinc-800  hover:text-green-600">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
