"use client";

import { useEffect } from "react";
import { auth } from "../../../firebaseConfig";
import { useRouter, usePathname } from "next/navigation";
import AdminHeader from "@/components/admin/adminHeader";
import AdminFooter from "@/components/admin/adminFooter";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user && pathname !== "/admin/login") {
        router.replace("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  const isLoginPage = pathname === "/admin/login";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!isLoginPage && <AdminHeader />}

      {/* Konten utama */}
      <main className="flex-1 p-6">{children}</main>

      {!isLoginPage && <AdminFooter />}
    </div>
  );
}
