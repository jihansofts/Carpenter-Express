import React from "react";
import Image from "next/image";
import { TeamData } from "@/lib/data";
import SectionTitle from "./SectionTitle";
export default function TeamCard() {
  return (
    <div className="container mx-auto py-10">
      <SectionTitle
        borderSize="border-2"
        lineColor="text-border"
        title="The Team"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-5">
        {TeamData.map((item) => (
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
              <span className="text-lg font-semibold">{item.name}</span>
              <p className="text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
