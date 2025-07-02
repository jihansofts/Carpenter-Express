import React from "react";
import Image from "next/image";
import SectionTitle from "@/common/SectionTitle";
export default function page() {
  return (
    <section className="py-16 text-center">
      <div className="container mx-auto">
        <Image
          src="/images/contact.jpg"
          alt="About Us Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
      <SectionTitle
        borderSize="border-2"
        lineColor="text-border"
        title="Contact"
      />
      <div className="container md:px-0 px-5 sm:px-5  mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4">
          <div>
            <span>🏠 Office Location:</span>
          </div>
          <div>
            <span className="text-secondary">
              {" "}
              U Poráků 524, 381 01 Český Krumlov 1-Horní Brána, Czechia
            </span>
          </div>
          {/* <div>
            <span>Email:</span>
            <span className="text-secondary">
              {" "}
              contact@carpenterexpress.com
            </span>
          </div> */}
        </div>
        <SectionTitle
          borderSize="border-1"
          lineColor="text-border"
          title="Map"
        />
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.2796231274674!2d14.316916076864938!3d48.81472600377767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47735d75a6a44815%3A0x220b6c55a123fe8c!2zVSBQb3LDoWvFrywgMzgxIDAxIMSMZXNrw70gS3J1bWxvdiAxLCBDemVjaGlh!5e0!3m2!1sen!2sbd!4v1751361880359!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"></iframe>
        </div>
        <SectionTitle
          borderSize="border-1"
          lineColor="text-border"
          title="Company Information"
        />
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div>
              <span className="font-semibold">Company Name:</span>
              <span className="text-secondary"> Carpenter Express</span>
            </div>
            <div>
              <span className="font-semibold">🏠 Office Location:</span>
              <span className="text-secondary">
                {" "}
                U Poráků 524, 381 01 Český Krumlov 1-Horní Brána, Czechia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
