export default function Footer() {
  return (
    <footer className="bg-[#e4d6b4] mt-20">
      <div className="max-w-[1440px] mx-auto px-10 py-16 flex flex-col gap-10">
        
        {/* Top Row */}
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-[26px] tracking-wide text-[#2b2b2b]">
              RALPH LAUREN
            </h2>
            <p className="text-xs text-gray-600 mt-2">
              Copyright © 2022 FASCO. All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-sm text-[#2b2b2b]">
            <a href="#" className="hover:underline underline-offset-4">
              Home
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Shop
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Products
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Pages
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
