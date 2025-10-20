// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const NAVBAR_HEIGHT = 88;        // sinkron dengan Hero
const BRAND = "#1CC7BE";                // warna tombol/brand

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/produk", label: "Product" },
    // "Kontak" ada sebagai CTA di kanan
  ];

  return (
    <header
      className="sticky top-0 z-[1000] w-full transition-all duration-300"
      style={{ height: NAVBAR_HEIGHT, background: scrolled ? BRAND : "#ffffff" }}
    >
      <div className="max-w-[1200px] h-full mx-auto px-6 flex items-center">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label="Beranda">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-20 object-contain rounded-full"
          />
        </Link>

        <div className="flex-1" />

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-12 mr-6">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                [
                  "text-[18px] font-medium transition-colors",
                  isActive
                    ? (scrolled ? "text-white" : "text-[#1AAFA5]")
                    : (scrolled ? "text-white/90 hover:text-white" : "text-[#2f3b45] hover:text-[#1AAFA5]"),
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA kanan (pakai Link, bukan object di href) */}
        <Link
          to="/kontak"
          className={[
            "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-colors shadow-sm",
            scrolled ? "bg-white text-[#0f766e]" : "text-white",
          ].join(" ")}
          style={!scrolled ? { background: BRAND } : undefined}
        >
          Kontak kami
        </Link>
      </div>

      {/* Bayangan halus saat navbar putih (feel card) */}
      {!scrolled && <div className="h-[1px] w-full shadow-[0_6px_24px_rgba(0,0,0,0.08)]" />}
    </header>
  );
}
