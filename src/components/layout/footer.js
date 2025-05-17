"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-blue-200 text-black py-6 shadow-inner w-full border-t border-blue-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-2 md:space-y-0">
        
        {/* Kiri */}
        <div>
          <p className="text-sm">
            &copy; 2025 Biro Pemerintahan dan Otonomi Daerah. All rights reserved.
          </p>
          <p className="text-sm">
            Jl. 17 Agustus No.69, Manado, Sulawesi Utara
          </p>
        </div>

        {/* Kanan */}
        <div>
          <p className="text-sm">Created by: Andrew Tombokan, Nathan Matindas, Highland Sirappa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
