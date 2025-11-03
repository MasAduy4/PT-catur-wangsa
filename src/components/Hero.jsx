// src/components/Hero.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
      className="relative min-h-[105vh] overflow-hidden bg-transparent flex items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 196, 204, 0.05) 85%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="home"
    >
      {/* Overlay gradasi elegan */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent sm:from-black/80 sm:via-black/50" />

      {/* Overlay lapisan warna biru kehijauan lembut */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00C4CC]/15 via-transparent to-transparent" />

      {/* Konten */}
      <div className="relative z-10 w-full">
        <div
          className="max-w-screen-xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 py-24 sm:py-28 md:py-32"
          data-aos="fade-up"
        >
          <div className="text-white text-center sm:text-left max-w-[700px] mx-auto sm:mx-0">
            <p
              className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold mb-2 tracking-tight text-[#A8E6E8]"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Welcome to
            </p>

            <h1
              className="font-extrabold leading-[1.1] text-white text-[clamp(26px,6vw,60px)] drop-shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              PT. CATUR WANGSA INDAH
            </h1>

            <div
              className="mx-auto sm:mx-0 mt-3 mb-4 w-20 sm:w-24 h-[3px] bg-[#00C4CC] rounded-full"
              data-aos="zoom-in"
              data-aos-delay="300"
            />

            <p
              className="text-[15px] sm:text-[18px] md:text-[20px] font-medium text-white/90 max-w-[480px] mx-auto sm:mx-0 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Producing high-quality detergent and chemical solutions for
              industrial and commercial needs.
            </p>

            <div
              className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link
                to="/produk"
                className="px-7 py-3 bg-[#00C4CC] hover:bg-[#00B0B8] text-white font-semibold text-[15px] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-[80%] sm:w-auto text-center"
              >
                Lihat Produk Kami
              </Link>
              <Link
                to="/about"
                className="px-7 py-3 border border-white/80 text-white hover:bg-white hover:text-[#00B0B8] font-semibold text-[15px] rounded-lg transition-all duration-300 w-[80%] sm:w-auto text-center"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ======== Lengkungan bawah + Fade Gradient ======== */}
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
