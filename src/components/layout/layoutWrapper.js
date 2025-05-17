"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Konten utama */}
      <main className="flex-1">{children}</main>
      
      <Footer />
    </div>
  );
}
