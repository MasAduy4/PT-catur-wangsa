import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    // cegah overflow horizontal
    document.documentElement.style.overflowX = "hidden";
  }, [menuOpen]);

  const isLight = scrolled || menuOpen;

  const linkClass = (isActive) =>
    isActive
      ? isLight
        ? "text-[#00b9be]"
        : "text-[#00e5e9]"
      : isLight
      ? "text-[#2f3b45] hover:text-[#00b9be]"
      : "text-white hover:text-[#00e5e9]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 box-border ${
        isLight ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* wrapper full width tapi dibatasi max screen */}
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-auto object-contain select-none"
          />
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none ${
            isLight ? "text-[#2f3b45]" : "text-white"
          }`}
        >
          <span
            className={`block h-[2px] w-full rounded-full transition-all duration-300 ${
              isLight ? "bg-[#2f3b45]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
          ></span>
          <span
            className={`block h-[2px] w-full rounded-full transition-opacity duration-300 ${
              isLight ? "bg-[#2f3b45]" : "bg-white"
            } ${menuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block h-[2px] w-full rounded-full transition-all duration-300 ${
              isLight ? "bg-[#2f3b45]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
          ></span>
        </button>

        {/* Menu Desktop */}
        <nav
          className={`hidden md:flex items-center space-x-10 font-[Quicksand] text-[15px] ${
            isLight ? "text-[#2f3b45]" : "text-white"
          }`}
        >
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
            About
          </NavLink>
          <NavLink to="/produk" className={({ isActive }) => linkClass(isActive)}>
            Product
          </NavLink>
          <Link
            to="/kontak"
            className={`ml-3 px-6 py-2 rounded-md font-semibold text-[13px] transition ${
              isLight
                ? "bg-[#00c4cc] text-white hover:bg-[#00b0b8]"
                : "bg-white text-[#00b9be] hover:bg-[#f5f5f5]"
            }`}
          >
            Kontak kami
          </Link>
        </nav>
      </div>

      {/* Backdrop gelap */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-[9998]"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Drawer Menu Mobile */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 w-full bg-white shadow-lg rounded-b-xl z-[9999] transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start gap-2 px-8 py-6 font-[Quicksand] text-[16px] text-[#2f3b45]">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-[#00b9be]" : "hover:text-[#00b9be]"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-[#00b9be]" : "hover:text-[#00b9be]"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/produk"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `py-2 ${isActive ? "text-[#00b9be]" : "hover:text-[#00b9be]"}`
            }
          >
            Product
          </NavLink>
          <Link
            to="/kontak"
            onClick={() => setMenuOpen(false)}
            className="mt-3 px-6 py-2 rounded-md font-semibold text-[14px] bg-[#00c4cc] text-white hover:bg-[#00b0b8] transition"
          >
            Kontak kami
          </Link>
        </nav>
      </div>
    </header>
  );
}
