"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const indianStates = [
  "andhra pradesh", "arunachal pradesh", "assam", "bihar", "chhattisgarh",
  "goa", "gujarat", "haryana", "himachal pradesh", "jharkhand", "karnataka",
  "kerala", "madhya pradesh", "maharashtra", "manipur", "meghalaya", "mizoram",
  "nagaland", "odisha", "punjab", "rajasthan", "sikkim", "tamil nadu",
  "telangana", "tripura", "uttar pradesh", "uttarakhand", "west bengal"
];

const ApplyForm = () => {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState("");

  useEffect(() => {
    const selectedCourse = searchParams.get("course");
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [searchParams]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-indigo-50 to-white"
    >
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">
        <h1 className="text-xl font-semibold text-indigo-700 text-center mb-4">
          Apply Now
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="Enter Phone Number"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          placeholder="Enter WhatsApp Number"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Enter Address"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          name="state"
          id="state"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select a state</option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={course}
          readOnly
          className="w-full px-4 py-2 border font-extrabold rounded bg-gray-100 text-gray-600 cursor-not-allowed"
        />

        <Button className="w-full" variant="outline" size="sm">
          Submit
        </Button>
      </form>
    </motion.div>
  );
};

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <ApplyForm />
    </Suspense>
  );
}
