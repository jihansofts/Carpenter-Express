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
        <p className="mb-8  mx-auto text-base text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          distinctio ratione magni, iste blanditiis dicta modi debitis nostrum.
          Voluptatem soluta vitae doloribus quo sed explicabo ex, aliquam
          placeat praesentium totam quam earum dolor sit recusandae animi
          assumenda non eius provident. Provident, velit blanditiis? Illum
          repellendus non quos illo, placeat accusamus?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            title="How do we work?"
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
                Design and assessment
              </h3>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm">
                It is important to have answers to the following questions at
                the very beginning of the assignment:
              </p>
              <ul className="list-[square] pl-5 text-sm space-y-2">
                <li>What does the client want from us?</li>
                <li>How much time do we have to do it?</li>
                <li>How much does the client want to spend on this order?</li>
              </ul>
              <p className="text-sm">
                Once we have this information, we make an appointment for a site
                visit. After the assessment, we make a layout and a digital
                model. Based on that, we create draft designs and an informative
                quotation.
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
                Finalization of the design and deposit
              </h3>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm">
                After the second consultations, we select the best draft design
                and check on the materials, the types of wood, textures, colors,
                harmony, fenestrations, sealers, tiles, ridging, etc.
              </p>

              <Image
                src="/images/about4.jpg"
                alt="Final design"
                width={400}
                height={300}
                className="w-full h-auto object-cover grayscale"
              />
              <p className="text-sm">
                And after the conciliations, we establish the final price. If we
                reach an agreement, an advance payment is paid and we finalize
                the design to start production.
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
                Production and delivery
              </h3>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm">
                If the client requests, we inform them about the manufacturing
                process. We deliver and install the finished product at the
                agreed location and date.
              </p>

              <Image
                src="/images/about5.jpg"
                alt="Delivery"
                width={400}
                height={300}
                className="w-full h-auto object-cover grayscale"
              />
              <p className="text-sm">
                After installation and delivery, we inform the client about
                product warranties and usage. The remaining balance is then
                paid.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
