// src/components/History.jsx
export default function History() {
  // Ganti path gambar sesuai aset yang kamu punya di public/history/
  const ITEMS = [
    {
      img: "/why/Icon_jam.png",
      alt: "Ikon jam",
      title: "1967",
      text: "Didirikan oleh Wong Kang Kuin",
    },
    {
      img: "/history/Icon_kemas.png",
      alt: "Ikon box produk",
      title: "1975",
      text: "Produksi sabun batangan buatan tangan",
    },
    {
      img: "/history/Icon_produksi.png",
      alt: "Ikon modernisasi",
      title: "Modernisasi",
      text: "Produksi detergent krim populer",
    },
    {
      img: "/history/Icon_pabrik.png",
      alt: "Ikon pabrik saat ini",
      title: "Saat ini",
      text: "Produksi dengan skala besar, produk dikenal luas",
    },
  ];

  return (
    <section
      id="history"
      className="relative py-16 md:py-20 bg-gradient-to-br from-white via-[#E8FAF7]/60 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#1e5f6b]">
            Sejarah Perusahaan
          </h2>
          <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-[#1bb9ac]/70" />
        </div>

        {/* Items */}
        <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
          {ITEMS.map((it, i) => (
            <article
              key={it.title}
              className="flex items-start gap-5 rounded-2xl bg-white/90 ring-1 ring-teal-900/5 shadow-[0_6px_24px_rgba(2,18,8,0.06)] p-5 md:p-6
                         transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(2,18,8,0.08)]"
              data-aos="fade-up"
              data-aos-delay={80 + i * 100}
            >
              {/* Icon badge */}
              <div className="shrink-0 grid place-items-center rounded-2xl bg-teal-50 ring-1 ring-teal-200/70 w-16 h-16 md:w-18 md:h-18 shadow-inner overflow-hidden">
                {it.img ? (
                  <img
                    src={it.img}
                    alt={it.alt || it.title}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                ) : (
                  <span className="text-teal-700 text-2xl">✓</span>
                )}
              </div>

              {/* Texts */}
              <div>
                <h3 className="text-[24px] md:text-[26px] font-extrabold text-slate-800 leading-tight">
                  {it.title}
                </h3>
                <p className="mt-1 text-slate-600 text-[15px] md:text-base leading-relaxed">
                  {it.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* dekor tipis di bawah biar smooth */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
