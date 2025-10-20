// src/components/WhyChooseUs.jsx
export default function WhyChooseUs() {
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
      text: "Menggunakan fasilitas produksi terkini untuk menjaga kualitas.",
    },
    {
      img: "/why/Icon_Detergen.png",
      alt: "Ikon botol produk",
      title: "Produk Serbaguna",
      text: "Cocok untuk kebutuhan rumah tangga, usaha laundry, hingga industri.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#E8FAF7] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-18 lg:py-20">
        <h2
          className="text-center text-[32px] md:text-[40px] lg:text-[44px] font-extrabold tracking-tight text-[#206a74]"
          data-aos="fade-up"
        >
          Mengapa Memilih Kami?
        </h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="rounded-3xl bg-white shadow-[0_10px_32px_rgba(2,18,8,0.10)] p-6 md:p-7 lg:p-8 text-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_44px_rgba(2,18,8,0.12)]"
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              {/* Badge foto/icon (lebih besar) */}
              <div className="mx-auto mb-5 h-20 w-20 md:h-24 md:w-24 rounded-3xl bg-teal-50 ring-1 ring-teal-200/70 grid place-items-center overflow-hidden">
                {it.img ? (
                  <img
                    src={it.img}
                    alt={it.alt || it.title}
                    className="h-12 w-12 md:h-14 md:w-14 object-contain"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                ) : (
                  <span className="text-teal-700 text-2xl font-semibold select-none">
                    {it.icon || "✓"}
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-slate-800 text-lg md:text-xl lg:text-2xl">
                {it.title}
              </h3>
              <p className="text-slate-600 text-[15px] md:text-base mt-2 leading-relaxed">
                {it.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
