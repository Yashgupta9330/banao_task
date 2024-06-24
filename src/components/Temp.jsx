"use client";
import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import Button from "./Button";

export default function Decoration({ data }) {
  return (
    <div className="flex flex-wrap h-full p-5 ">
      <div className="flex flex-col justify-between p-6">
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-semibold flex items-center">
            {data.icon}
            <span className="ml-2">{data.title}</span>
          </div>
          <p>{data.text}</p>
          <Button text={data.button} />
        </div>
      </div>
    </div>
  );
}
