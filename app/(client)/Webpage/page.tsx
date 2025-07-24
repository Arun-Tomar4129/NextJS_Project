'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Image from next/image

const Page = () => {
  return (
    <div className="p-4">
      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-4 w-full min-h-screen">
        {/* Left Image Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:w-[60%] w-full h-[500px] relative"
        >
          <Image
            src="/Image1.jpeg"
            alt="University View"
            fill
            className="rounded-lg object-cover"
          />
        </motion.div>

        {/* Right Content Section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:w-[40%] w-full flex flex-col gap-4"
        >
          <div className="w-full border-2 rounded-lg overflow-hidden relative h-[250px]">
            <Image
              src="/Image2.jpeg"
              alt="Another View"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-gray-700 text-base">
              This university is ranked among the top 8 in India and number 1 in Uttar Pradesh. It offers world-class education, research opportunities, and modern infrastructure. With a focus on innovation, entrepreneurship, and global exposure, it’s the ideal place to build your future.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <Link href="https://www.instagram.com" target="_blank">
              <Instagram className="text-pink-600 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank">
              <Linkedin className="text-blue-600 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <Facebook className="text-blue-800 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <Youtube className="text-red-600 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <Twitter className="text-blue-400 hover:scale-110 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Fixed WhatsApp Icon */}
      <Link
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full shadow-lg z-50 hover:scale-105 transition-transform size-[70px] flex items-center justify-center animate-bounce"
      >
        <Image
          src="/WhatApp.jpg"
          alt="WhatsApp Icon"
          width={70}
          height={70}
          className="rounded-full object-cover"
        />
      </Link>
    </div>
  );
};

export default Page;
