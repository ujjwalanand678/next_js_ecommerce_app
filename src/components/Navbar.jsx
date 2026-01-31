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
    <nav className="bg-[#E1E9EE] h-auto sm:h-[132px]">
      <div
        className="
          h-full
          flex
          flex-col sm:flex-row
          items-center
          justify-between
          px-4 sm:px-8 lg:px-16
          py-4 sm:py-0
          gap-4 sm:gap-0
        "
      >
        <Link href="/productlist">
          <h1
            className="
              text-[#484848]
              font-[400]
              tracking-wide
              text-2xl sm:text-3xl md:text-[52px]
              text-center sm:text-left
              leading-tight
            "
          >
            RALPH LAUREN
          </h1>
        </Link>

        <div
          className="
            flex
            items-center
            justify-center
            flex-wrap
            gap-4 sm:gap-6 lg:gap-8
            text-sm sm:text-base
          "
        >
          {user ? (
            <>
              <span className="border rounded-sm px-3 py-2">
                {user.userName}
              </span>

              <button
                onClick={handleLogout}
                className="
                  border
                  rounded-sm
                  px-3
                  py-2
                  hover:bg-gray-800
                  hover:text-white
                  transition-colors
                  cursor-pointer
                "
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="
                border
                rounded-sm
                px-3
                py-2
                hover:bg-gray-800
                hover:text-white
                transition-colors
                cursor-pointer
              "
            >
              LOGIN
            </Link>
          )}

          <BiShoppingBag size={20} />
        </div>
      </div>
    </nav>
  );
}
