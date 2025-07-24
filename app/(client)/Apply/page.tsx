// app/apply/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// ✅ Always use PascalCase for component names in Next.js
const ApplyForm = () => {
  const searchParams = useSearchParams();
  const [course, setCourse] = useState("");

  useEffect(() => {
    const selectedCourse = searchParams.get("course");
    if (selectedCourse) {
      setCourse(selectedCourse);
    }
  }, [searchParams]);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

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
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Enter Email"
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="tel"
          placeholder="Enter Phone Number"
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="tel"
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
          required
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

        <Button className="w-full" variant="outline" size="sm" type="submit">
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
