"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/Webpage", label: "Home" },
    { href: "/Webpage/Course", label: "Courses" },
    { href: "/Webpage/Placement", label: "Placement" },
    { href: "/Webpage/About", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md fixed top-0 z-50"
    >
      <div className="w-full flex justify-between items-center px-[5px] lg:px-[10px] py-3">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/logoUnivercity.jpeg"
            alt="University Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          <h1 className="text-lg sm:text-xl font-semibold text-indigo-700">
            Radhe Shyam University
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-700 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white overflow-hidden px-6 ${
          isOpen ? "pb-4" : "pb-0"
        } flex flex-col gap-4 text-gray-700 font-medium`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
