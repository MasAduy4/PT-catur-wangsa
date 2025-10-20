// src/components/Value.jsx
import React from "react";

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
  return (
    <section
      id="values"
      className="py-16 md:py-20 bg-gradient-to-b from-white via-[#E8FAF7] to-[#D9F4F0]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Judul */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#1e5f6b]">
            {title}
          </h2>
        </div>

        {/* Kartu */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <article
              key={it.heading || i}
              className="rounded-2xl bg-white/85 shadow-[0_8px_26px_rgba(2,18,8,0.06)] ring-1 ring-teal-900/5
                         px-6 py-7 md:px-7 md:py-8 text-center transition-all duration-300
                         hover:-translate-y-[3px] hover:shadow-[0_16px_38px_rgba(2,18,8,0.10)]"
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              {/* Badge ikon */}
              <div className="mx-auto mb-4 h-16 w-16 md:h-18 md:w-18 rounded-2xl bg-teal-50 ring-1 ring-teal-200/70 grid place-items-center overflow-hidden">
                {it.img ? (
                  <img
                    src={it.img}
                    alt={it.alt || it.heading}
                    className="h-9 w-9 md:h-10 md:w-10 object-contain"
                    loading="lazy"
                    width={40}
                    height={40}
                  />
                ) : null}
              </div>

              <h3 className="text-[18px] md:text-[20px] font-extrabold text-slate-800">
                {it.heading}
              </h3>
              <p className="text-slate-600 mt-2 leading-relaxed text-[14.5px]">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
