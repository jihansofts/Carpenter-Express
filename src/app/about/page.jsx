import React from "react";
import Image from "next/image";
import About from "@/components/About";
export default function page() {
  return (
    <div>
      <div className="container mx-auto">
        <Image
          src="/images/about.jpg"
          alt="img1"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
      </div>
      <About />
    </div>
  );
}
