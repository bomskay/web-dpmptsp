"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-blue-200 text-black shadow-md">
      <div className="w-full mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo dan Judul */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <Link href="/" className="text-xl font-bold">
            Biro Pemerintahan dan Otonomi Daerah
          </Link>
        </div>

        {/* Navigasi */}
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/"
                className="hover:text-blue-800 transition-colors"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/profilKantor"
                className="hover:text-blue-800 transition-colors"
              >
                Profil Kantor
              </Link>
            </li>
             <li>
              <Link
                href="/galeri"
                className="hover:text-blue-800 transition-colors"
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                href="/admin/login"
                className="hover:text-blue-800 transition-colors"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
