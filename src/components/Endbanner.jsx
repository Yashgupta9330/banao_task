import React from "react";
import Image from "next/image";

export default function EndBanner() {
  return (
    <div className="bg-f7fdff w-full md:px-12 pt-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">Your Hobby, Your Community...</h1>
          <button className="bg-blue-500 text-white py-2 md:py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300 self-start">
            Get Started
          </button>
          <div className="mt-8">
            <Image
              src="/end-banner.png"
              alt="End Banner"
              width={400}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
      </div>
  );
}
