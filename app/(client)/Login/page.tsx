"use client";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-indigo-300">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[340px] bg-white shadow-xl rounded-2xl p-6"
      >
        <h1 className="text-center text-3xl font-bold mb-6 text-indigo-600">Login</h1>

        <form className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Enter username"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <div className="text-right text-sm text-indigo-600 hover:underline cursor-pointer">
            <a href="#">Forgot password?</a>
          </div>

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
            Don’t have an account?
            <a href="#" className="text-indigo-600 hover:underline ml-1">Sign up</a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Page;
