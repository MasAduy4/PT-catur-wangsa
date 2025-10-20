export default function FeaturedProducts() {
  return (
    <>
      {/* Sabun Palem – teks kiri, gambar kanan */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-18 lg:py-22 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f6f72]">
              Sabun Palem
            </h3>
            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Produk pembersih rumah tangga dan industri. Melayani pembelian partai besar,
              makloon &amp; eceran.
            </p>
            <a
              href="/produk#palem"
              className="mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[#19BFB3] text-white font-semibold shadow hover:opacity-90"
            >
              Lihat Detail Produk
            </a>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="/img/jar-palem.png" // ganti sesuai aset
              alt="Sabun Palem"
              className="w-[460px] max-w-full mx-auto drop-shadow-2xl rotate-[12deg]"
              draggable={false}
            />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 blur-2xl bg-slate-400/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* 3 benefit kiri + foto lineup kanan */}
      <section className="bg-gradient-to-b from-white via-[#e9fbf8] to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-10">
            {[
              { h:"99.9% Lebih Efektif", p:"Bersihkan noda bekas makanan" },
              { h:"Hilangkan Noda Bandel", p:"Pakaian bersih dalam sekejap" },
              { h:"Harga Ekonomis", p:"Baju bersih dan wangi" },
            ].map((b,i)=>(
              <div key={b.h} data-aos="fade-up" data-aos-delay={i*100}>
                <p className="text-xl md:text-2xl font-extrabold text-slate-800 drop-shadow-sm">{b.h}</p>
                <p className="text-slate-600 text-lg mt-1">{b.p}</p>
              </div>
            ))}
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="/public/produkpalem.png"
              alt="Produk Palem"
              className="w-[560px] max-w-full mx-auto drop-shadow-2xl"
              draggable={false}
            />
            <div className="absolute -right-6 top-6 w-10 h-10 rounded-full bg-white/70 shadow" />
            <div className="absolute right-10 -bottom-4 w-16 h-16 rounded-full bg-white/70 shadow" />
          </div>
        </div>
      </section>
    </>
  );
}
