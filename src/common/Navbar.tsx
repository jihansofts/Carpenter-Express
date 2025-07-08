"use client";

import {
  CircleParking,
  Facebook,
  House,
  Instagram,
  Linkedin,
  Menu,
  X,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pt-10">
      {/* Top Row */}
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        {/* Left Icons */}
        <div className="flex gap-4 text-primary">
          <Link href="/">
            <House size={25} className="text-primary hover:text-gray-500" />
          </Link>
          <a target="_blank" href="https://www.facebook.com/carpenterexpress0/">
            <Facebook size={25} className="text-primary  hover:text-gray-500" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/carpenterexpress0/">
            <Instagram
              size={25}
              className="text-primary  hover:text-gray-500"
            />
          </a>
          <a target="_blank" href="https://www.youtube.com/@Carpenterexpress0">
            <Youtube size={25} className="text-primary  hover:text-gray-500" />
          </a>
          <a
            href="https://www.tiktok.com/@carpenterexpress0"
            target="_blank"
            className="group inline-block w-6 h-6 text-primary hover:text-gray-500 transition-colors duration-200">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-full h-full">
              <path
                d="M14,2 C15.1046,2 16,2.89543 16,4 C16,5.44733 17.03,6.6618 18.3984,6.93991 C19.4808,7.15992 20.1799,8.21575 19.9599,9.29819 C19.7399,10.3806 18.6841,11.0798 17.6016,10.8598 C17.0406,10.7457 16.5037,10.5646 16,10.3252 L16,16 C16,19.3137 13.3137,22 10,22 C6.68629,22 4,19.3137 4,16 C4,13.2015 5.91407,10.8551 8.50148,10.1891 C9.57119,9.91382 10.6616,10.5578 10.9369,11.6275 C11.2122,12.6972 10.5682,13.7876 9.49852,14.0629 C8.63547,14.285 8,15.0708 8,16 C8,17.1046 8.89543,18 10,18 C11.1046,18 12,17.1046 12,16 L12,4 C12,2.89543 12.8954,2 14,2 Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a target="_blank" href="https://x.com/carpenterexpres">
            <X size={25} className="text-primary  hover:text-gray-500" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/107770906/admin/dashboard/">
            {" "}
            <Linkedin size={25} className="text-primary  hover:text-gray-500" />
          </a>
          <a target="_blank" href="https://www.pinterest.com/carpenterexpress/">
            <CircleParking
              size={25}
              className="text-primary  hover:text-gray-500"
            />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Language Switcher - hidden on small screens */}
        <div className="hidden md:flex gap-2 text-sm text-primary font-medium">
          {/* <span>EN</span> */}
          {/* <span>RO</span>
          <span>HU</span> */}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="container mx-auto mt-6 hidden md:flex items-center justify-between px-4 md:px-0">
        {/* Left Line + About Us */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="h-px bg-primary flex-1"></div>
          <Link href="/about">
            <span className="text-primary text-[25px] font-medium whitespace-nowrap hover:font-semibold">
              ABOUT US
            </span>
          </Link>
        </div>

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image src="/logo.png" width={120} height={120} alt="logo" />
          </Link>
        </div>

        {/* Right Line + Contact */}
        <div className="flex items-center gap-4 w-1/3 justify-end">
          <Link href="/contact">
            <span className="text-primary text-[25px] font-medium whitespace-nowrap hover:font-semibold">
              CONTACT
            </span>
          </Link>
          <div className="h-px bg-primary flex-1"></div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 space-y-4 text-center text-primary font-medium">
          <div className="border-t border-primary pt-4">
            <Link href="/about">
              <p>ABOUT US</p>
            </Link>
          </div>
          <div>
            <Image
              src="/logo.png"
              width={100}
              height={100}
              alt="logo"
              className="mx-auto"
            />
          </div>
          <div className="border-b border-primary pb-4">
            <Link href="/contact">
              <p>CONTACT</p>
            </Link>
          </div>
          <div className="flex justify-center gap-4 text-sm">
            <span>EN</span>
            {/* <span>RO</span>
            <span>HU</span> */}
          </div>
        </div>
      )}
    </header>
  );
}
