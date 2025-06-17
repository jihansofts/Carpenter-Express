"use client";
import React from "react";
import Image from "next/image";
import { Categorytype } from "../types/type";
import Link from "next/link";

const CategoryData: Categorytype[] = [
  {
    id: 1,
    name: "ROOF CONSTRUCTION",
    image: "/images/category1.jpg",
    menu: [
      { label: "Timber Framing", href: "/roof/timber-framing" },
      { label: "Trusses", href: "/roof/trusses" },
      { label: "Insulation", href: "/roof/insulation" },
    ],
  },
  {
    id: 2,
    name: "FURNITURE",
    image: "/images/category2.jpg",
    menu: [
      { label: "Kitchen", href: "/furniture/kitchen" },
      { label: "Living Room", href: "/furniture/living-room" },
      { label: "Bedroom", href: "/furniture/bedroom" },
    ],
  },
  {
    id: 3,
    name: "STAIR",
    image: "/images/category3.jpg",
    menu: [
      { label: "Spiral", href: "/stairs/spiral" },
      { label: "Floating", href: "/stairs/floating" },
      { label: "Traditional", href: "/stairs/traditional" },
    ],
  },
  {
    id: 4,
    name: "WOODEN ARCHITECTURE",
    image: "/images/category4.jpg",
    menu: [
      { label: "Cabins", href: "/wooden/cabins" },
      { label: "Treehouses", href: "/wooden/treehouses" },
      { label: "Studios", href: "/wooden/studios" },
    ],
  },
  {
    id: 5,
    name: "SERVICES",
    image: "/images/category5.jpg",
    menu: [
      { label: "Lifting", href: "/services/lifting" },
      { label: "On-site Work", href: "/services/on-site" },
      { label: "Planning", href: "/services/planning" },
    ],
  },
];

export default function Category() {
  return (
    <section className="container lg:px-0 md:px-0 px-5 sm:px-5 mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {CategoryData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-sm shadow-md">
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={400}
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-primary text-white text-center py-2 text-sm font-medium z-10">
              {item.name}
            </div>

            {/* Hover Menu */}
            <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white z-20 p-4 flex flex-col justify-center items-center text-center">
              <ul className="space-y-1 text-[18px] font-semibold">
                {item.menu.map((menuItem, idx) => (
                  <li key={idx}>
                    <Link
                      href={menuItem.href}
                      className="hover:underline hover:text-yellow-300 transition-colors">
                      {menuItem.label.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
