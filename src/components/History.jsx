// src/components/History.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function History() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  const ITEMS = [
    {
      icon: "/why/Icon_jam.png",
      title: "1967",
      text: "Didirikan oleh Wong Kang Kuin",
    },
    {
      icon: "/history/Icon_kemas.png",
      title: "1975",
      text: "Produksi sabun batangan buatan tangan",
    },
    {
      icon: "/history/Icon_pabrik.png",
      title: "Saat ini",
      text: "Produksi dengan skala besar, produk dikenal luas",
    },
    {
      icon: "/history/Icon_produksi.png",
      title: "Modernisasi",
      text: "Produksi detergent krim populer",
    },
  ];

  return (
    <section
      id="history"
      className="relative bg-gradient-to-br from-white via-[#E8FAF7]/60 to-[#D9FAF4]/60 py-20 md:py-28 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Heading */}
        <h2
          className="text-[#0F6F72] text-[26px] sm:text-[32px] md:text-[36px] font-extrabold mb-12"
          data-aos="fade-up"
        >
          Sejarah Perusahaan
        </h2>

        {/* Grid content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-12 gap-x-10 md:gap-x-20">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center space-y-4"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[#E0FAF8] ring-1 ring-[#00B9BE]/30 shadow-sm">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#0F6F72] font-bold text-lg md:text-xl">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-xs">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
