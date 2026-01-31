export default function Footer() {
  return (
    <footer className="bg-[#DBCDAC]">
      <div
        className="
          max-w-[1440px]
          mx-auto
      lg:h-[268px] lg:gap-10   lg:mx-[180px]

          px-4 sm:px-8 lg:px-10
          py-8 sm:py-12 lg:py-20
        "
      >
        {/* Top Row */}
        <div
          className="
            flex
            flex-col sm:flex-row
            items-center sm:items-start
            justify-between
            gap-6 sm:gap-0
            text-center sm:text-left
          "
        >
          {/* Brand */}
          <div>
            <h2
              className="
                font-serif
                tracking-wide
                text-[#484848]
                text-2xl sm:text-[32px]
              "
            >
              RALPH LAUREN
            </h2>

            <p className="text-xs text-[#484848] mt-2">
              Copyright © 2022 FASCO. All Rights Reserved.
            </p>
          </div>

          {/* Links */}
          <nav
            className="
              flex
              flex-wrap
              justify-center sm:justify-end
              items-center
              gap-4 sm:gap-6 lg:gap-8
              text-sm sm:text-base
              text-[#484848]
            "
          >
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
