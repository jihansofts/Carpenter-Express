import React from "react";
import Image from "next/image";
import SectionTitle from "@/common/SectionTitle";

export default function About() {
  return (
    <div className="py-16  text-center">
      <div className="container mx-auto">
        <Image
          src="/images/about.jpg"
          alt="About Us Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
      {/* About Us */}
      <div className="flex items-center justify-center">
        <SectionTitle
          borderSize="border-2"
          lineColor="text-border"
          title="About Us"
        />
      </div>
      <section className="container md:px-0 px-5 sm:px-5 max-w-7xl mx-auto">
        <p className="mb-6  mx-auto text-base text-secondary">
          Carpenter Express was founded on the values of tradition, precision,
          and creativity. The business has evolved from a classic furniture
          workshop into a modern woodworking powerhouse while preserving the
          soul of traditional craftsmanship.
        </p>
        <p>
          We specialize in bespoke, made-to-order projects using a combination
          of premium raw materials and advanced technology. Our portfolio
          includes indoor and outdoor woodwork, and we proudly serve both local
          and international clients. At Carpenter Express, every project begins
          with a flexible mindset and an entrepreneurial spirit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <Image
            src="/images/about1.jpg"
            alt="img1"
            width={400}
            height={300}
            className="w-full h-auto object-cover grayscale"
          />
          <Image
            src="/images/about2.jpg"
            alt="img2"
            width={400}
            height={300}
            className="w-full h-auto object-cover grayscale"
          />
          <Image
            src="/images/about3.jpg"
            alt="img3"
            width={400}
            height={300}
            className="w-full h-auto object-cover grayscale"
          />
        </div>
      </section>

      {/* How do we work? */}
      <section className="container px-5 md:px-0 mx-auto mt-20">
        <div className="flex items-center justify-center mb-8">
          <SectionTitle
            borderSize="border-1"
            lineColor="border-primary"
            title="How We Work"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 text-left text-neutral-700">
          {/* Step 1 */}
          <div>
            <div className="flex flex-col items-center gap-4 border-b border-neutral-300 pb-4">
              <div className="text-center w-[50px] h-[50px] rounded-full border-2 border-primary flex items-center justify-center text-xl font-semibold text-primary">
                1
              </div>
              <h3 className="font-bold text-lg text-primary text-center">
                Design & Consultation
              </h3>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm">
                Every project starts with understanding your needs:
              </p>
              <ul className="list-[square] pl-5 text-sm space-y-2">
                <li>What are your design goals?</li>
                <li>What’s your timeline?</li>
                <li>What’s your budget?</li>
              </ul>
              <p className="text-sm">
                With this information, we schedule a site visit if needed. Then,
                we create a layout and 3D model of your space. Based on your
                vision and location-specific data, we develop one or more design
                concepts and provide an initial quote.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex flex-col items-center gap-4 border-b border-neutral-300 pb-4">
              <div className="text-center w-[50px] h-[50px] rounded-full border-2 border-primary flex items-center justify-center text-xl font-semibold text-primary">
                2
              </div>
              <h3 className="font-bold text-lg text-primary text-center">
                Design Finalization & Deposit
              </h3>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm">
                After a second consultation, we refined the preferred design
                choosing materials, wood types, textures, finishes, color
                palettes, window placements, tiles, and more.
              </p>

              <Image
                src="/images/about4.jpg"
                alt="Final design"
                width={400}
                height={300}
                className="w-full h-auto object-cover grayscale"
              />
              <p className="text-sm">
                Once everything is aligned and the quote is approved, a deposit
                is made. From there, we finalize the blueprint and begin
                production.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex flex-col items-center gap-4 border-b border-neutral-300 pb-4">
              <div className="text-center w-[50px] h-[50px] rounded-full border-2 border-primary flex items-center justify-center text-xl font-semibold text-primary">
                3
              </div>
              <h3 className="font-bold text-lg text-primary text-center">
                Production & Delivery
              </h3>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm">
                If requested, we keep clients updated throughout the production
                process. When completed, we deliver and install your piece at an
                agreed-upon time and location.
              </p>

              <Image
                src="/images/about5.jpg"
                alt="Delivery"
                width={400}
                height={300}
                className="w-full h-auto object-cover grayscale"
              />
              <p className="text-sm">
                After installation, we guide you through care tips, product
                warranties, and finalize the remaining payment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
