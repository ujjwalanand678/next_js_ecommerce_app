"use client";

import { BiShoppingBag } from "react-icons/bi";

export default function Navbar() {


const handleLogout = ()=>{

}
  return (
    <nav className="h-[132px] w-full bg-[#E1E9EE] border-b border-gray-200">
      <div className=" mx-14 h-full flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <div className="text-[52px] font-[400] tracking-wide text-[#484848]">
          RALPH LAUREN
        </div>

        {/* Right section and logout */}
        <div className="flex items-center gap-4">
        
          <button
            onClick={handleLogout}
            className="px-4 py-1.5 border border-black text-sm hover:bg-black hover:text-white transition"
          >
            Logout
          </button>
          <BiShoppingBag />
        </div>
      </div>
    </nav>
  );
}
