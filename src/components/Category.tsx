"use client";
import React from "react";
import Image from "next/image";
import { CategoryData } from "@/lib/data";
import Link from "next/link";

export default function Category() {
  return (
    <section className="container lg:px-0 md:px-0 px-5 sm:px-5 mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {CategoryData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-sm shadow-md">
            <Image
              src={item.img}
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
              <ul className="space-y-1 uppercase text-[18px] font-semibold">
                {item.subpages.map((sub) => (
                  <li key={sub.slug}>
                    <Link href={`/${item.slug}/${sub.slug}`}>{sub.title}</Link>
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
