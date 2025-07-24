"use client";

import Navbar from "./Navbar";

export default function WebpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-[64px]">{children}</div>
    </>
  );
}
