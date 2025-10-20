// src/components/Hero.jsx
import React from "react";

export default function Hero({
  bgImage = "/gedung.png",
}) {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[110vh] md:min-h-[115vh] lg:min-h-[120vh]"
      style={bgStyle}
    >
      {/* Overlay kiri → kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/5" />

      {/* Konten */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* jarak vertikal biar turun seperti figma */}
        <div className="pt-36 md:pt-44 lg:pt-56 pb-40 md:pb-56 lg:pb-64">
          <div className="max-w-4xl text-white">
            <h1 className="leading-[1.06] font-extrabold drop-shadow">
              {/* headline dibesarkan */}
              <span className="block text-[52px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
                Tentang Kami
              </span>
            </h1>

            {/* sub-head persis copy figma */}
            <p className="mt-4 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white/90 max-w-3xl">
              Lebih dari 50 tahun menghadirkan solusi kebersihan bagi keluarga Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Wave bawah */}
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
