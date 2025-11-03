// src/components/Hero.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero({ bgImage = "/gedung.png" }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[110vh] md:min-h-[115vh] lg:min-h-[120vh] flex items-center overflow-hidden font-[Poppins]"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 196, 204, 0.05) 85%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap elegan kiri-ke-kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

      {/* Overlay lapisan teal lembut */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00C4CC]/15 via-transparent to-transparent" />

      {/* Konten tengah */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
          <div
            className="pt-40 md:pt-52 lg:pt-64 pb-36 md:pb-48 lg:pb-56 text-white max-w-4xl"
            data-aos="fade-up"
          >
            <h1
              className="leading-[1.08] font-extrabold drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="block text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px]">
                Tentang Kami
              </span>
            </h1>

            <p
              className="mt-4 text-[17px] sm:text-[19px] md:text-[22px] lg:text-[24px] font-medium text-white/90 max-w-2xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Lebih dari 50 tahun menghadirkan solusi kebersihan bagi keluarga
              Indonesia — dari generasi ke generasi.
            </p>
          </div>
        </div>
      </div>

      {/* Wave bawah dengan transisi halus */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          className="block w-full h-[120px] sm:h-[180px] md:h-[220px] lg:h-[260px]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fadeWave" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#E8FAF7" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 C300,250 900,50 1200,200 L1200,300 L0,300 Z"
            fill="url(#fadeWave)"
          />
        </svg>
      </div>
    </section>
  );
}
