import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProductionVideo() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    // ProductionVideo.jsx - Fullscreen + Autoplay (muted) YouTube embed
    <section className="relative w-full min-h-screen overflow-hidden bg-transparent">
      {/* Accent soft blur to add depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00C4CC]/10 blur-[180px] opacity-60" />
        <div className="absolute bottom-[-300px] right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-[#00C4CC]/5 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-[#10474E] mt-8 font-[Poppins] z-10"
          data-aos="fade-up"
        >
          Bagaimana Produk Kami Dibuat
        </h2>

        <p
          className="text-slate-700 mt-3 mb-6 text-[15px] md:text-[16px] font-light z-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Dari bahan baku pilihan hingga ke tangan Anda.
        </p>

        {/* Video Container - full viewport height (dikurangi space untuk heading) */}
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-[#E0F7F4]/70 bg-gradient-to-br from-white/90 to-[#F8FFFE]/90 z-0"
          data-aos="zoom-in"
          data-aos-delay="200"
          style={{ height: 'calc(100vh - 160px)' }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/TxHXfc79js8?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1"
            title="Palem - Proses Produksi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Optional: small note for accessibility / fallback */}
        <p className="text-xs text-slate-500 mt-4 z-10">
          Jika autoplay tidak berjalan di beberapa browser, klik tombol play pada video.
        </p>
      </div>

      {/* Hilangkan gelombang bawah agar gradasinya menyatu ke section berikutnya */}
    </section>
  );
}
