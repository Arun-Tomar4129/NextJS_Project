"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-[340px] bg-white rounded-2xl shadow-lg p-6"
      >
        <h1 className="text-center text-3xl font-bold text-indigo-700 mb-6">Sign Up</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="text"
            name="username"
            placeholder="Create username"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Create password"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            type="submit"
            className="mt-2 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Submit
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <p className="text-sm text-center text-gray-600">
            Already have an account?
            <a href="#" className="text-indigo-600 hover:underline ml-1">Login</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Page;
