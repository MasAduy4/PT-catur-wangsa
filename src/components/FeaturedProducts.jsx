// src/components/FeaturedProducts.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturedProducts() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  return (
    <>
      {/* ========== Section 1: Sabun Palem ========== */}
      <section className="relative bg-white font-[Poppins] overflow-hidden">
        {/* Latar belakang halus */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F7FFFE] via-white to-[#E9FBF8]/40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
          {/* Gambar di mobile muncul dulu, di desktop tetap kanan */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center md:justify-end order-1 md:order-2"
          >
            <img
              src="public/product/Detergen Bubuk Fresklin  3FK.png"
              alt="Sabun Palem"
              className="w-[340px] sm:w-[400px] md:w-[480px] lg:w-[520px] rotate-[-6deg] drop-shadow-[0_25px_45px_rgba(0,0,0,0.3)] transition-transform duration-700 ease-out hover:rotate-[-3deg] hover:scale-110"
              draggable={false}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[25px] bg-black/10 blur-[12px] rounded-full" />
          </div>

          {/* Teks di mobile setelah gambar */}
          <div
            data-aos="fade-right"
            className="order-2 md:order-1 text-center md:text-left z-10"
          >
            <h2 className="text-[#007E80] text-[38px] sm:text-[46px] md:text-[56px] font-extrabold leading-[1.1] mb-4 tracking-tight">
              Sabun Palem
            </h2>
            <p className="text-slate-700 text-[17px] sm:text-[18px] md:text-[20px] leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              Produk pembersih rumah tangga dan industri. Melayani pembelian
              partai besar, makloon, & eceran. Efektif, ekonomis, dan ramah lingkungan.
            </p>
            <a
              href="/produk#palem"
              className="inline-block bg-[#00B9BE] hover:bg-[#009EA3] text-white text-[16px] font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Lihat Detail Produk
            </a>
          </div>
        </div>
      </section>

      {/* ========== Section 2: Keunggulan Produk ========== */}
      <section className="relative bg-gradient-to-b from-white via-[#E9FBF8] to-white overflow-hidden font-[Poppins]">
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar dulu di mobile */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center md:justify-end order-1 md:order-2"
          >
            <img
              src="/produkpalem.png"
              alt="Produk Palem"
              className="w-[340px] sm:w-[420px] md:w-[500px] lg:w-[540px] rotate-[5deg] drop-shadow-[0_25px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 ease-out hover:rotate-[2deg] hover:scale-110"
              draggable={false}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-[28px] bg-black/10 blur-[14px] rounded-full" />
          </div>

          {/* Teks setelah gambar di mobile */}
          <div
            className="order-2 md:order-1 space-y-8 text-center md:text-left"
            data-aos="fade-right"
          >
            {[
              {
                h: "99.9% Lebih Efektif",
                p: "Mengangkat noda dan minyak membandel tanpa merusak tangan dan serat kain.",
              },
              {
                h: "Formula Aman",
                p: "Diformulasi dengan bahan pilihan yang ramah lingkungan dan tidak mengiritasi kulit.",
              },
              {
                h: "Harga Ekonomis",
                p: "Kualitas tinggi dengan harga kompetitif untuk rumah tangga dan industri.",
              },
            ].map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 120}>
                <h4 className="text-[#007E80] text-[22px] md:text-[26px] font-semibold mb-1">
                  {item.h}
                </h4>
                <p className="text-slate-700 text-[16px] md:text-[18px] leading-relaxed max-w-lg mx-auto md:mx-0">
                  {item.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
