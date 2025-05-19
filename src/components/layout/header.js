"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import HamburgerMenu from "./hamburgerMenu";

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-red-900 text-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-3 flex-shrink-0 min-w-0">
          <img src="/image/logo.png" alt="Logo" className="w-10 h-10" />
          <Link
            href="/"
            className="text-xl font-bold hover:text-secondary break-words max-w-xs sm:max-w-full"
          >
            Dinas Penanaman Modal dan PTSP
            <br></br>
            Kabupaten Minahasa
            
            
          </Link>
        </div>

        {/* Navigasi desktop */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="hover:text-secondary transition-colors">
            Beranda
          </Link>
          <Link href="/profilKantor" className="hover:text-secondary transition-colors">
            Profil Kantor
          </Link>
          <Link href="/galeri" className="hover:text-secondary transition-colors">
            Galeri
          </Link>
          <Link href="/admin/login" className="hover:text-secondary transition-colors">
            Login
          </Link>
        </nav>

        {/* Hamburger menu mobile di kanan */}
        <div className="md:hidden ml-auto">
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
