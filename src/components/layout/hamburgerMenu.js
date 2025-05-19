"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tombol hamburger */}
      <div className="absolute top-4 right-4 md:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-1 w-full bg-white rounded transition duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-1 w-full bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Overlay transparan */}
<div
  className={`fixed inset-0 bg-black/50 z-[9999] transition-opacity duration-300 ${
    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
  onClick={() => setIsOpen(false)}
/>



      {/* Drawer menu dari kanan */}
      <nav
  className={`fixed top-0 right-0 h-full w-64 bg-red-900/80 text-white shadow-lg z-[10000] transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
        {/* Tombol tutup X */}
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="flex flex-col p-6 space-y-6 text-lg mt-16">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
          </li>
          <li>
            <Link href="/profilKantor" onClick={() => setIsOpen(false)}>
              Profil Kantor
            </Link>
          </li>
          <li>
            <Link href="/galeri" onClick={() => setIsOpen(false)}>
              Galeri
            </Link>
          </li>
          <li>
            <Link href="/admin/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HamburgerMenu;
