import React from "react";
import Image from "next/image";
interface ContactNumber {
  id: number;
  number: string;
}
export default function ServiceInfo() {
  const contactNumbers: ContactNumber[] = [
    { id: 1, number: "0788 201 849" },
    { id: 2, number: "0745 092 696" },
  ];

  const benefits: string[] = [
    "Made from cellulose – 100% organic",
    "Certified by Natureplus® for ecological and health safety",
    "Excellent thermal performance",
    "Naturally regulates indoor temperature and humidity",
    "Strong fire protection properties",
    "Available in multiple thicknesses",
    "Minimal waste, clean installation",
    "Cost-effective and fast installation",
    "Fast and efficient with THERMOBLOW system",
    "Suitable for roofs, floors, and walls",
    "Ensures complete cavity filling and seamless insulation layers",
    "Thermal insulation without waste",
    "Fast installation and simple building logistics with THERMOBLOW",
    "Insulation for roofs, floors and walls",
    "Individual insulation layers and complete filling of cavities",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Contact Section */}
      <div className="bg-gray-100 rounded-lg p-6 mb-12 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Contact and questions
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          {contactNumbers.map((contact: ContactNumber) => (
            <div key={contact.id} className="flex items-center">
              <svg
                className="w-5 h-5 text-primary mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-lg font-medium text-gray-700">
                +4 {contact.number}
              </span>
            </div>
          ))}
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-primary mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-lg font-medium text-gray-700">
              info@carpenterexpress.com
            </span>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl capitalize font-bold text-center text-gray-800 mb-8">
        Certified for{" "}
        <span className="text-primary">sustainable and healthy</span>{" "}
        construction
      </h1>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <h4 className="col-span-1 md:col-span-2 lg:col-span-3 text-lg font-semibold text-gray-800 mb-4">
          Why Choose THERMOFLOC®?
        </h4>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-border">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-700">{benefit}</p>
            </div>
          </div>
        ))}
        <p className="col-span-1 md:col-span-2 lg:col-span-3 text-sm text-gray-600 mt-4">
          Create a cozy, healthy, and efficient home with THERMOFLOC® insulation
          trusted across Europe for modern, sustainable building.
        </p>
      </div>

      {/* Logo Section */}
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-full shadow-lg">
          {/* Replace with your actual logo */}
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
