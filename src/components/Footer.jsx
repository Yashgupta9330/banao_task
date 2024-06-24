import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-100 w-full flex flex-col items-center justify-center">
      <div className="w-[80%] py-8 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Column 1 */}
          <div>
            <h5 className="text-[16px] font-[700] font-poppins text-left leading-[18px] tracking-tighter mb-2">Hobbycue</h5>
            <ul className="list-none">
              <li className="mb-1">About us</li>
              <li className="mb-1">Our services</li>
              <li className="mb-1">Work with Us</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-[14px] font-[700] font-poppins text-left leading-[18px] tracking-tighter mb-2">How do I</h5>
            <ul className="list-none">
              <li className="mb-1">About us</li>
              <li className="mb-1">Our services</li>
              <li className="mb-1">Work with Us</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-[14px] font-[700] font-poppins text-left leading-[18px] tracking-tighter mb-2">Quick Links</h5>
            <ul className="list-none font-poppins font-normal text-base leading-18 tracking-wider">
              <li className="mb-1">About us</li>
              <li className="mb-1">Our services</li>
              <li className="mb-1">Work with Us</li>
              <li className="mb-1">FAQ</li>
              <li className="mb-1">Contact Us</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h5 className="text-[14px] font-[700] font-poppins text-left leading-[18px] tracking-tighter mb-2">Social Media</h5>
            <div className="flex gap-4 mb-4">
              <FaFacebookF className="text-xl" />
              <FaTwitter className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaLinkedinIn className="text-xl" />
              <FaTelegram className="text-xl" />
              <FaYoutube className="text-xl" />
            </div>

            <form>
              <div className="flex flex-col sm:flex-row items-center">
                <input
                  type="text"
                  placeholder="Email ID"
                  aria-label="email ID"
                  className="py-3 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-full sm:w-auto"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-3 px-4 rounded-r-lg mt-2 sm:mt-0 sm:ml-1 w-full sm:w-auto hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors duration-300"
                >
                  Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-200 text-center py-4 w-full">
        <p className="text-xs text-gray-600">
          Lohith. Copyrights 2024. All rights reserved
        </p>
      </div>
    </div>
  );
}
