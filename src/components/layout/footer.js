"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-red-900 text-white py-6 shadow-inner w-full border-t border-blue-300">
  <div className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center space-y-2">
        
        {/* Kiri */}
        <div>
          <p className="text-sm">
            &copy; 2025 Dinas Penanaman Modal dan PTSP. All rights reserved.
          </p>
          <p className="text-sm">
            Jl. Manguni No.78, Sasaran, Minahasa
          </p>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;
