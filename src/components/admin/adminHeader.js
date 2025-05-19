"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminHamburgerMenu from "./adminHamburger";
import Logout from "./logout";

const AdminHeader = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-red-900 text-white shadow-md">
      <div className="w-full px-4 flex items-center justify-between py-3">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-3">
          <Image src="/image/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-semibold text-lg">Admin Panel DPMPTSP</span>
        </div>

        {/* Navigasi desktop */}
        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <Link href="/admin/dashboard" className="hover:text-gray-300 transition-colors">
            Dashboard
          </Link>
        <Logout/>
        </nav>

        {/* Hamburger menu untuk mobile */}
        <div className="md:hidden">
          <AdminHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
