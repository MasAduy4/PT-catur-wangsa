// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#66b9b6] to-[#5b9b99] text-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 py-12 md:py-16">
        {/* Header tengah */}
        <div className="text-center">
          <h3 className="font-extrabold tracking-wide text-[18px] sm:text-[20px] md:text-[22px]">
            PT CATUR WANGSA INDAH
          </h3>
          <p className="text-white/90 text-sm md:text-[15px] mt-1">
            Detergent &amp; Manufacturer
          </p>

          {/* Garis tipis di tengah */}
          <div
            className="mt-3 flex items-center justify-center gap-2"
            aria-hidden="true"
          >
            <span className="block h-px w-12 sm:w-16 bg-white/40" />
            <span className="block h-[2px] w-20 sm:w-28 bg-white" />
            <span className="block h-px w-12 sm:w-16 bg-white/40" />
          </div>
        </div>

        {/* Grid konten */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-white/95">
              <li>
                <a href="/about" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="/produk" className="hover:underline">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Syarat &amp; Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">Produk</h4>
            <ul className="space-y-2 text-white/95">
              <li>
                <a href="/produk?c=sabun-cair" className="hover:underline">
                  Sabun Cair
                </a>
              </li>
              <li>
                <a href="/produk?c=detergent-bubuk" className="hover:underline">
                  Detergent Bubuk
                </a>
              </li>
              <li>
                <a href="/produk?c=detergent-cream" className="hover:underline">
                  Detergent Cream
                </a>
              </li>
              <li>
                <a href="/produk?c=jerigen" className="hover:underline">
                  Jerigen
                </a>
              </li>
            </ul>
          </div>

          {/* Sertifikat */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">Sertifikat</h4>
            <p className="text-white/90 text-sm mb-5">
              Kami memiliki sertifikat yang menjamin kualitas & kepatuhan
              produk.
            </p>

            <div className="flex flex-col gap-4">
              {/* Sertifikat 1 */}
              <article className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white/10 p-4 rounded-lg shadow-sm hover:bg-white/15 transition">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-md mx-auto sm:mx-0">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2l2.7 5.5L20 8l-4 3.8L17 18l-5-2.7L7 18l1-6.2L4 8l5.3-.5L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="font-medium text-sm">
                    Sertifikat SJH BPJH
                  </div>
                  <div className="text-xs text-white/70 truncate">
                    Sertifikat Halal &amp; Kepatuhan Produk
                  </div>
                </div>

                <a
                  href="public/sertif/Sertifikat SJH BPJH .pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 sm:mt-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                  aria-label="Lihat Sertifikat SJH BPJH"
                >
                  Lihat
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-current"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>

              {/* Sertifikat 2 */}
              <article className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white/10 p-4 rounded-lg shadow-sm hover:bg-white/15 transition">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-md mx-auto sm:mx-0">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="3"
                      fill="currentColor"
                    />
                    <path
                      d="M7 12h10M7 16h6"
                      stroke="#ffffff"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="font-medium text-sm">
                    Sertifikat CPPKRTB
                  </div>
                  <div className="text-xs text-white/70 truncate">
                    Sertifikat Pengolahan &amp; Tata Kelola Limbah
                  </div>
                </div>

                <a
                  href="public/sertif/Sertifikat CPPKRTB.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 sm:mt-0 inline-flex items-center justify-center gap-1 px-3 py-1.5 bg-white/10 border border-white/20 rounded-md text-sm hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
                  aria-label="Lihat Sertifikat CPPKRTB"
                >
                  Lihat
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-current"
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* Strip bawah */}
      <div className="text-center text-white/90 py-4 text-xs sm:text-sm border-t border-white/10">
        © {new Date().getFullYear()} PT Catur Wangsa Indah. All rights reserved.
      </div>
    </footer>
  );
}
