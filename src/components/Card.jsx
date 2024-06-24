"use client";
import React from "react";
import { FaCalendarCheck, FaPeopleGroup } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import Decoration from "./Temp";

const homeDecorationData = [
  {
    title: "People",
    text: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    icon: <FaPeopleGroup size={40} className="mr-2 text-[#8064a2]" />,
    button: "Connect"
  },
  {
    title: "Place",
    text: " Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues.",
    icon: <MdPlace size={40} className="mr-2 text-[#77933c]" />,
    button: "Connect"
  },
  {
    title: "Product",
    text: "  Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores.",
    icon: <IoBagHandleSharp size={40} className="mr-2 text-[#c0504d]" />,
    button: "Connect"
  },
  {
    title: "Program",
    text: " Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
    icon: <FaCalendarCheck size={40} className="mr-2 text-[#0096c8]" />,
    button: "Connect"
  },
];

export default function Card() {
  return (
    <div className="flex items-center justify-center bg-light w-full h-full">
      <div className="flex items-center justify-center bg-white p-8 md:p-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {homeDecorationData.map((data, index) => (
            <Decoration key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

