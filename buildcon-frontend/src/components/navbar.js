import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/mainlogo.jpeg";

const Navbar = () => {
  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50 
        bg-transparent
        text-white
      "
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">

        {/* LEFT — LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* RIGHT — MENU */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium">

          {/* HOME */}
          <NavLink to="/" className="hover:text-gray-300 transition">
            Home
          </NavLink>

         {/* COMPANY DROPDOWN */}
<div className="relative group cursor-pointer">
  <button className="inline-flex items-center gap-1 hover:text-gray-300 transition">
    <span>Company</span>
    <span className="text-xs mt-[2px]">▾</span>
  </button>

  {/* DROPDOWN */}
  <div
    className="
      pointer-events-none
      absolute left-1/2 -translate-x-1/2 top-full 
      mt-4 min-w-[220px]
      rounded-2xl 
      bg-[#050816]/95 
      border border-white/10
      shadow-[0_18px_45px_rgba(0,0,0,0.7)]
      backdrop-blur-xl
      opacity-0 translate-y-3
      transition-all duration-300 
      group-hover:opacity-100 
      group-hover:pointer-events-auto 
      group-hover:translate-y-0
      before:content-['']
      before:absolute before:-top-4 before:left-0 before:right-0 before:h-4
      before:bg-transparent
    "
  >
    <Link
      to="/about"
      className="block px-4 py-3 rounded-lg text-sm text-gray-100 hover:bg-white/10 transition"
    >
      About Us
    </Link>

    {/* <Link
      to="/leadership"
      className="block px-4 py-3 rounded-lg text-sm text-gray-100 hover:bg-white/10 transition"
    >
      Leadership
    </Link> */}

    <Link
      to="/ourstory"
      className="block px-4 py-3 rounded-lg text-sm text-gray-100 hover:bg-white/10 transition"
    >
      Our Story
    </Link>
  </div>
</div>


          {/* PROJECTS DROPDOWN */}
          <div className="relative group cursor-pointer">
            <button className="inline-flex items-center gap-1 hover:text-gray-300 transition">
              <span>Projects</span>
              <span className="text-xs mt-[2px]">▾</span>
            </button>

            <div
              className="
                pointer-events-none
                absolute left-1/2 -translate-x-1/2 top-full 
                mt-4 min-w-[220px]
                rounded-2xl 
                bg-[#050816]/95 
                border border-white/10
                shadow-[0_18px_45px_rgba(0,0,0,0.7)]
                backdrop-blur-xl
                opacity-0 translate-y-3
                transition-all duration-300 
                group-hover:opacity-100 
                group-hover:pointer-events-auto 
                group-hover:translate-y-0
                before:content-['']
                before:absolute before:-top-4 before:left-0 before:right-0 before:h-4
                before:bg-transparent
              "
            >
              <Link
                to="/projects#completed"
                className="block px-4 py-3 rounded-lg text-sm text-gray-100 hover:bg-white/10 transition"
              >
                Completed
              </Link>

              <Link
                to="/projects#ongoing"
                className="block px-4 py-3 rounded-lg text-sm text-gray-100 hover:bg-white/10 transition"
              >
                Ongoing
              </Link>

              <Link
                to="/projects#upcoming"
                className="block px-4 py-3 rounded-lg text-sm text-gray-100 hover:bg-white/10 transition"
              >
                Upcoming
              </Link>
            </div>
          </div>

          {/* OTHER MENU ITEMS */}
          <NavLink to="/services" className="hover:text-gray-300 transition">
            Services
          </NavLink>

          <NavLink to="/gallery" className="hover:text-gray-300 transition">
            Gallery
          </NavLink>

          <NavLink to="/careers" className="hover:text-gray-300 transition">
            Careers
          </NavLink>

          <NavLink to="/contact" className="hover:text-gray-300 transition">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
