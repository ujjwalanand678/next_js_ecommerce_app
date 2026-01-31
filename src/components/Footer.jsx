export default function Footer() {
  return (
    <footer className="bg-[#DBCDAC] ">
      <div className="max-w-[1440px] h-[268px] px-10 py-20 gap-10   mx-50">
        
        {/* Top Row */}
        <div className="flex  justify-between">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-[32px] tracking-wide text-[#484848]">
              RALPH LAUREN
            </h2>
            <p className="text-[12px] text-[#484848] mt-2">
              Copyright © 2022 FASCO. All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 text-[16px] text-[#484848]">
            <a href="#" className=" underline-offset-4">
              Home
            </a>
            <a href="#" className=" underline-offset-4">
              Shop
            </a>
            <a href="#" className=" underline-offset-4">
              Products
            </a>
            <a href="#" className=" underline-offset-4">
              Pages
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
