// src/components/ProductionVideo.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductionVideo() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    // ProductionVideo.jsx
<section className="relative py-20 md:py-24 overflow-hidden bg-transparent">

      {/* Accent soft blur to add depth */}
      <div className="absolute inset-0">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00C4CC]/10 blur-[180px] opacity-60" />
        <div className="absolute bottom-[-300px] right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-[#00C4CC]/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#10474E] text-center font-[Poppins]"
          data-aos="fade-up"
        >
          Bagaimana Produk Kami Dibuat
        </h2>

        <p
          className="text-center text-slate-700 mt-3 mb-10 text-[15px] md:text-[16px] font-light"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dari bahan baku pilihan hingga ke tangan Anda.
        </p>

        {/* Video Container */}
        <div
          className="aspect-video w-full rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
                     border border-[#E0F7F4]/70 bg-gradient-to-br from-white/90 to-[#F8FFFE]/90
                     transform-gpu will-change-transform transition-all duration-700 ease-out hover:scale-[1.01]"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <iframe
            className="w-full h-full"
            // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video Produksi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Hilangkan gelombang bawah agar gradasinya menyatu ke section berikutnya */}
    </section>
  );
}
