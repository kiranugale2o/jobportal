"use client";

import Headers from "@/headre";

export default function CommonLayout({ children }) {
  return (
    <>
      {/* headers section */}
      <Headers />
      <main>{children}</main>
    </>
  );
}
