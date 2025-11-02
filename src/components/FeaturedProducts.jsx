export default function FeaturedProducts() {
  return (
    <>
      {/* Sabun Palem – SUPER COMPACT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6 grid md:grid-cols-2 gap-4 items-center">
          <div data-aos="fade-right">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f6f72] leading-snug">
              Sabun Palem
            </h3>

            <p className="mt-2 text-slate-600 text-sm md:text-[15px] leading-tight max-w-md">
              Produk pembersih rumah tangga & industri. Melayani pembelian partai, makloon & eceran.
            </p>

            <a
              href="/produk#palem"
              className="mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2 bg-[#19BFB3] text-white text-sm font-semibold shadow-sm hover:opacity-95 transition"
            >
              Lihat Detail Produk
            </a>
          </div>

          <div className="relative flex justify-center" data-aos="fade-left">
            <img
              src="/jelitoples.png" // pastikan path benar di public/
              alt="Sabun Palem"
              className="w-[320px] md:w-[380px] max-w-full mx-auto drop-shadow-md"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-12 blur-xl bg-slate-300/20 rounded-full" />
          </div>
        </div>
      </section>

      {/* Benefit section – SUPER COMPACT */}
      <section className="bg-gradient-to-b from-white via-[#e9fbf8] to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-6 grid md:grid-cols-2 gap-4 items-center">
          <div className="space-y-4">
            {[
              { h: "99.9% Lebih Efektif", p: "Bersihkan noda bekas makanan" },
              { h: "Hilangkan Noda Bandel", p: "Pakaian bersih dalam sekejap" },
              { h: "Harga Ekonomis", p: "Baju bersih dan wangi" },
            ].map((b, i) => (
              <div key={b.h} data-aos="fade-up" data-aos-delay={i * 60}>
                <p className="text-base md:text-lg font-semibold text-slate-800 leading-tight">
                  {b.h}
                </p>
                <p className="text-sm text-slate-600 mt-0.5">{b.p}</p>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center" data-aos="fade-left">
            <img
              src="/produkpalem.png"
              alt="Produk Palem"
              className="w-[380px] md:w-[460px] max-w-full mx-auto drop-shadow-md"
              draggable={false}
            />
            <div className="absolute -right-4 top-4 w-7 h-7 rounded-full bg-white/80 shadow-sm" />
            <div className="absolute right-8 -bottom-2 w-10 h-10 rounded-full bg-white/80 shadow-sm" />
          </div>
        </div>
      </section>
    </>
  );
}
