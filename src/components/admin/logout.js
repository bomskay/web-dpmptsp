"use client";

import { useRouter } from "next/navigation";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/admin/login"); 
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="
        px-4 py-2 bg-white text-black text-sm font-semibold rounded shadow hover:bg-red-800 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
