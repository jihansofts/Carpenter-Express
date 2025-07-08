import Navbar from "@/common/Navbar";
import About from "@/components/About";
import Category from "@/components/Category";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} `}>
      
      <Navbar />
      <Category />
      <About />
    </div>
  );
}
