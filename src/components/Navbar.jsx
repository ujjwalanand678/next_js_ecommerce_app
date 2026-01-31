"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BiShoppingBag } from "react-icons/bi";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Read auth state
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login");
  };

  return (
    <nav className="h-[90px] bg-[#eaf1f5]">
      <div className="max-w-[1440px] mx-auto h-full px-10 flex items-center justify-between">
        
        {/* Brand */}
        <h1 className="font-serif text-[28px] tracking-wide text-[#2b2b2b]">
          RALPH LAUREN
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-8 text-sm text-[#2b2b2b]">
          {user ? (
            <>
              <span className="tracking-wide">
                {user.userName}
              </span>

              <button
                onClick={handleLogout}
                className="tracking-wide hover:underline underline-offset-4"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="tracking-wide hover:underline underline-offset-4"
            >
              LOGIN
            </Link>
          )}

          <BiShoppingBag size={18} />
        </div>
      </div>
    </nav>
  );
}
