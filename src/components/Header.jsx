"use client";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { MdExplore, MdStars } from "react-icons/md";
import { FaBookmark, FaBell, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-center w-full">
      <div className="w-[95%] flex justify-between items-center py-3 px-2 lg:px-4">
        <div className="flex items-center">
          <button className="md:hidden text-2xl mr-4">
            <FiMenu />
          </button>
          <Link href="/" className="flex items-center">
            <Image
              src="/hobby-logo-mobile.jpg"
              height={30}
              width={35}
              className="lg:hidden"
              alt="Mobile Logo"
            />
            <Image
              src="/hobby-logo.jpg"
              height={60}
              width={150}
              className="hidden lg:block w-[200px]"
              alt="Desktop Logo"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="#" className="md:hidden mx-2">
            <FaMagnifyingGlass size={20} className="text-[#8064a2]" />
          </Link>
          <Link href="#" className="md:hidden mx-2">
            <FaBell size={20} className="text-[#8064a2]" />
          </Link>
            <Link href="#" className="md:hidden mx-3">
              <FaUser size={20} className="text-[#8064a2]" />
            </Link>
        </div>
        <div className="hidden md:flex items-center">
          <div className="flex items-center">
            <form className="relative mr-4">
              <input
                type="text"
                placeholder="Search here"
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaMagnifyingGlass size={20} />
              </button>
            </form>
            <div className="relative">
              <button className="flex items-center text-gray-700 mr-4">
                <MdExplore size={24} className="text-[#8064a2] mx-2" />
                <span>Explore</span>
                <IoIosArrowDown />
              </button>
              <div className="absolute hidden bg-white shadow-lg rounded-md mt-2 py-2 w-48">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">People Community</Link>
                <hr className="my-1" />
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Places - Venues</Link>
                <hr className="my-1" />
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Programs - Events</Link>
                <hr className="my-1" />
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Products - Store</Link>
                <hr className="my-1" />
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Blogs</Link>
              </div>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-700 mr-4">
                <MdStars size={24} className="text-[#8064a2] mx-2" />
                <span>Hobbies</span>
                <IoIosArrowDown />
              </button>
            </div>
            <Link href="#" className="mx-2 hidden lg:block">
              <FaBookmark size={20} className="text-[#8064a2]" />
            </Link>
            <Link href="#" className="mx-2 hidden lg:block">
              <FaBell size={20} className="text-[#8064a2]" />
            </Link>
            <Link href="#" className="mx-2 hidden lg:block">
              <FaShoppingCart size={20} className="text-[#8064a2]" />
            </Link>
              <button className="ml-4 px-4 py-2 border border-[#8064a2] rounded-md text-[#8064a2]">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
