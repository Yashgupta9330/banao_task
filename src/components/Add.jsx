"use client";
import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import Button from "./Button";

export default function Add() {
  return (
    <div className="flex w-full h-full items-center justify-center mb-32">
      <div className="p-6 w-3/5">
        <div className="space-y-4">
          <div className="flex items-center">
          <IoMdAddCircle color="#0096c8" size={40} className="me-2" />
            <h2 className="font-semibold text-2xl">Testimonials</h2>
          </div>
          <p className="font-light text-base">
            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
          </p>
          <Button text="Add Now" />
        </div>
      </div>
    </div>
  );
}
