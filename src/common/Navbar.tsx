"use client";

import { Facebook, House, Menu, X, Youtube } from "lucide-react";
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
            <House
              size={18}
              className="text-primary hover:bg-secondary hover:text-white"
            />
          </Link>
          <Link href="/">
            <Facebook
              size={18}
              className="text-primary hover:bg-secondary hover:text-white"
            />
          </Link>
          <Link href="/">
            <Youtube
              size={18}
              className="text-primary hover:bg-secondary hover:text-white"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Language Switcher - hidden on small screens */}
        <div className="hidden md:flex gap-2 text-sm text-primary font-medium">
          <span>EN</span>
          <span>RO</span>
          <span>HU</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="container mx-auto mt-6 hidden md:flex items-center justify-between px-4 md:px-0">
        {/* Left Line + About Us */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="h-px bg-primary flex-1"></div>
          <Link href="/about">
            <span className="text-primary font-medium whitespace-nowrap hover:font-semibold">
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
            <span className="text-primary font-medium whitespace-nowrap hover:font-semibold">
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
            <p>ABOUT US</p>
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
            <p>CONTACT</p>
          </div>
          <div className="flex justify-center gap-4 text-sm">
            <span>EN</span>
            <span>RO</span>
            <span>HU</span>
          </div>
        </div>
      )}
    </header>
  );
}
