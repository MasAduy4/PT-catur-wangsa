const ITEMS = [
    { icon: "🕒", title: "1967",      text: "Didirikan oleh Wong Kang Kuin" },
    { icon: "📦", title: "1975",      text: "Produksi sabun batangan buatan tangan" },
    { icon: "📈", title: "Modernisasi", text: "Produksi detergent krim populer" },
    { icon: "🏭", title: "Saat ini",  text: "Produksi skala besar, produk dikenal luas" },
  ];
  
  export default function History() {
    return (
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center" data-aos="fade-up">
            Sejarah Perusahaan
          </h2>
  
          <div className="mt-10 grid md:grid-cols-2 gap-x-14 gap-y-8">
            {ITEMS.map((it, i) => (
              <div
                key={i}
                className="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="grid place-items-center bg-cyan-100 text-cyan-800 rounded-full w-12 h-12 text-2xl">
                  {it.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-800">{it.title}</h3>
                  <p className="text-slate-700 mt-1">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  