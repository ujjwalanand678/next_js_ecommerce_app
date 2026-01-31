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
    <nav className="h-[90px] bg-[#eaf1f5]">
      <div className="max-w-[1440px] mx-auto h-full px-10 flex items-center justify-between">
        <Link href="/">
        <h1 className="font-serif text-[28px] tracking-wide">
          RALPH LAUREN
        </h1>
        </Link>
        <div className="flex items-center gap-8 text-sm">
          {user ? (
            <>
              <span>{user.userName}</span>
              <button
                onClick={handleLogout}
                className="hover:underline"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:underline">
              LOGIN
            </Link>
          )}
          <BiShoppingBag size={18} />
        </div>
      </div>
    </nav>
  );
}
