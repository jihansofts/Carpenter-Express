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
            <span>Address:</span>
          </div>
          <div>
            <span>Phone:</span>
            <span className="text-secondary"> +1 234 567 890</span>
          </div>
          <div>
            <span>Email:</span>
            <span className="text-secondary">
              {" "}
              contact@carpenterexpress.com
            </span>
          </div>
        </div>
        <SectionTitle
          borderSize="border-1"
          lineColor="text-border"
          title="Map"
        />
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%2C%20CA%2094101%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161"
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
                <span className="font-semibold">Address:</span>
                <span className="text-secondary"> 123 Carpenter St, Wood City, CA 12345</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
