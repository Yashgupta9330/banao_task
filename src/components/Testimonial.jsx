"use client";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonial() {
  return (
    <div className="flex w-full h-full items-center justify-center mb-32">
      <div className="px-6 w-[90%] md:w-3/5">
        <div className="space-y-4">
          <div className="flex items-center">
            <ImQuotesLeft size={30} color="#8064a2" className="mr-2" />
            <h2 className="font-semibold text-2xl">Testimonials</h2>
          </div>
          <p className="font-light text-base">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
        </div>
      </div>
    </div>
  );
}
