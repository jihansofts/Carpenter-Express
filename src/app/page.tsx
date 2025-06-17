"use client";
import Navbar from "@/common/Navbar";
import About from "@/components/About";
import Category from "@/components/Category";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Category />
      <About />
    </main>
  );
}
