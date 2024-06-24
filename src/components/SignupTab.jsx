"use client";
import React, { useState } from "react";
import Joinin from "./Joinin";

export default function SignupTab({ children }) {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="w-[410px] flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md">
        <div className="mb-1">
          <div className="flex justify-center">
            <button
              className={`px-4 py-1 font-semibold ${activeTab === "login" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("login")}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-1 font-semibold ${activeTab === "register" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
                }`}
              onClick={() => setActiveTab("register")}
            >
              Join In
            </button>
          </div>
        </div>
        <div>
          {activeTab === "login" && <Joinin />}
          {activeTab === "register" && <Joinin />}
        </div>
      </div>
    </div>
  );
}
