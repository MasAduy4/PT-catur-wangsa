// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  bgImage = "/gedung.png",
}) {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center", // komposisi tetap, tidak mengubah wave
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[110vh] md:min-h-[115vh] lg:min-h-[120vh]"
      style={bgStyle}
    >
      {/* Overlay kiri -> kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/5" />

      {/* Konten */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Turunkan teks (tinggal ubah pt-* kalau mau lebih turun/naik) */}
        <div className="pt-36 md:pt-44 lg:pt-56 pb-40 md:pb-56 lg:pb-64">
          <div className="max-w-3xl text-white">
            <p className="text-xl md:text-2xl font-semibold tracking-tight drop-shadow-sm">
              Welcome to
            </p>

            <h1 className="mt-2 leading-[1.1] font-extrabold drop-shadow">
              <span className="block text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
                PT. CATUR WANGSA INDAH
              </span>
            </h1>

            <p className="mt-3 text-lg md:text-xl font-semibold text-white/90">
              Detergent &amp; Manufacturer
            </p>

            <div className="mt-7">
              <Link
                to="/produk"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[#19BFB3] text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Lihat Produk Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE — jangan diubah */}
      <div className="absolute -bottom-px left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 260"
          preserveAspectRatio="none"
          className="block w-[calc(100%+1.3px)] h-[140px] md:h-[185px] lg:h-[220px]"
          aria-hidden="true"
        >
          <path
            d="
              M0,15
              C280,265 910,13 1200,220
              L1200,260
              A260,260 0 0 1 1200,360
              L0,290 Z
            "
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
