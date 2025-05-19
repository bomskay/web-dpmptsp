"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin/dashboard");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header hanya untuk non-admin, opsional */}
      {!isAdmin && <Header />}
      
      {/* Konten utama */}
      <main className="flex-1">{children}</main>
      
      {/* Footer hanya ditampilkan jika bukan halaman admin */}
      {!isAdmin && <Footer />}
    </div>
  );
}
