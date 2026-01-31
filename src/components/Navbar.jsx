"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BiShoppingBag } from "react-icons/bi";
import { getUser, clearAuthData } from "@/utils/auth";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    clearAuthData();
    setUser(null);
    router.push("/login");
  };

  return (
    <nav className="h-[132px] bg-[#E1E9EE]">
      <div className=" mx-16 h-full  flex items-center justify-between">
        <Link href="/">
        <h1 className="text-[#484848] text-[52px] font-[400] tracking-wide">
          RALPH LAUREN
        </h1>
        </Link>
        <div className="flex items-center gap-8 text-[16px]">
          {user ? (
            <>
              <span className="border rounded-sm px-3 py-2 ">{user.userName}</span>
              <button
                onClick={handleLogout}
                className="border rounded-sm px-3 py-2 hover:bg-gray-800 hover:text-white hover:transition-colors cursor-pointer"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:underline">
              LOGIN
            </Link>
          )}
          <BiShoppingBag size={20} />
        </div>
      </div>
    </nav>
  );
}
