import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Value({
  title = "Nilai yang Kami Pegang",
  items = [
    {
      img: "/values/daun.png",
      alt: "Ramah Lingkungan",
      heading: "Ramah Lingkungan",
      text: "Proses produksi ramah terhadap alam dan air.",
    },
    {
      img: "/values/inovasi.png",
      alt: "Inovasi",
      heading: "Inovasi",
      text: "Selalu memperbarui teknologi dan formulasi produk.",
    },
    {
      img: "/values/kualitas.png",
      alt: "Kualitas",
      heading: "Kualitas",
      text: "Setiap produk melewati standar uji ketat.",
    },
    {
      img: "/values/distribusi.png",
      alt: "Distribusi Luas",
      heading: "Distribusi Luas",
      text: "Tersedia di berbagai kota besar dan platform online.",
    },
  ],
}) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="values"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-[#E8FAF7]/80 to-[#D9F4F0]/70 font-[Poppins]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-[#0F6F72] text-[28px] md:text-[34px] font-extrabold leading-tight">
            {title}
          </h2>
          <div className="mt-3 mx-auto w-24 h-[3px] rounded-full bg-[#00B9BE]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {items.map((it, i) => (
            <article
              key={it.heading || i}
              className="rounded-2xl bg-gradient-to-b from-[#F8FFFE] to-[#E8FAF7] 
                         shadow-[0_8px_26px_rgba(0,0,0,0.05)] ring-1 ring-[#BFEFE9]/50
                         px-7 py-8 text-center transition-all duration-300 ease-out
                         hover:-translate-y-[4px] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
                         hover:bg-gradient-to-b hover:from-[#F6FFFE] hover:to-[#DFF8F3]"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Icon Badge */}
              <div
                className="relative mx-auto mb-5 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center
                           rounded-2xl bg-[#D9F9F5] ring-1 ring-[#00B9BE]/30 shadow-[inset_0_2px_6px_rgba(255,255,255,0.5)]
                           transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={it.img}
                  alt={it.alt || it.heading}
                  className="h-9 w-9 md:h-10 md:w-10 object-contain"
                  loading="lazy"
                />
              </div>

              {/* Texts */}
              <h3 className="text-[#0F6F72] text-[18px] md:text-[20px] font-bold mb-2">
                {it.heading}
              </h3>
              <p className="text-slate-600 text-[14.5px] md:text-[15px] leading-relaxed max-w-[260px] mx-auto">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
