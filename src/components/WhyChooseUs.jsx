// src/components/WhyChooseUs.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  const items = [
    {
      img: "/why/Icon_jam.png",
      alt: "Ikon jam pengalaman",
      title: "Sejak 1967",
      text: "Lebih dari 50 tahun pengalaman dalam industri sabun & deterjen.",
    },
    {
      img: "/why/Icon_perisai.png",
      alt: "Ikon perisai kualitas",
      title: "Kualitas Terjamin",
      text: "Produk terpercaya, aman, dan efektif mengangkat kotoran membandel.",
    },
    {
      img: "/why/Icon_Setting.png",
      alt: "Ikon roda gigi teknologi",
      title: "Teknologi Modern",
      text: "Menggunakan fasilitas produksi terkini untuk menjaga kualitas terbaik.",
    },
    {
      img: "/why/Icon_Detergen.png",
      alt: "Ikon botol produk",
      title: "Produk Serbaguna",
      text: "Cocok untuk kebutuhan rumah tangga, usaha laundry, hingga industri.",
    },
  ];

  return (
    // WhyChooseUs.jsx
<section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-transparent font-[Poppins]">

      {/* Accent Blur Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#00C4CC]/10 blur-[180px] rounded-full opacity-50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
        {/* ===== Heading Section ===== */}
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="text-[#00C4CC] font-semibold uppercase tracking-[3px] text-[13px] md:text-[14px] mb-2">
            Keunggulan Kami
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-extrabold leading-tight text-[#1B515A] drop-shadow-sm">
            Mengapa Memilih Kami?
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-[15px] sm:text-[16px] leading-relaxed font-light">
            Kami berkomitmen memberikan produk berkualitas tinggi dengan
            pengalaman, teknologi, dan kepercayaan yang telah terbukti.
          </p>
        </div>

        {/* ===== Feature Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {items.map((it, i) => (
            <article
              key={it.title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group rounded-3xl bg-white shadow-[0_10px_28px_rgba(0,0,0,0.08)] p-7 md:p-8 lg:p-9 text-center 
              transform-gpu will-change-transform transition-transform duration-700 ease-out
              hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
            >
              {/* Icon Wrapper */}
              <div className="mx-auto mb-6 h-20 w-20 md:h-24 md:w-24 rounded-3xl bg-gradient-to-br from-[#E0FAF8] to-[#D6F7F5] ring-1 ring-[#00C4CC]/30 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                <img
                  src={it.img}
                  alt={it.alt || it.title}
                  className="h-12 w-12 md:h-14 md:w-14 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#10474E] text-lg sm:text-xl md:text-[22px] mb-2 transition-colors duration-500 ease-out group-hover:text-[#00C4CC]">
                {it.title}
              </h3>

              {/* Text */}
              <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-light transition-colors duration-500 ease-out group-hover:text-slate-700">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Decorative Soft Curve */}
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-[#E8FAF7]/40 to-transparent pointer-events-none" />
    </section>
  );
}
