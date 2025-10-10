const PRODUCTS = [
  { id: 1, name: "Sabun Palem",       price: "Rp. xxx.xxx", img: "/jelitoples.jpeg" },
  { id: 2, name: "Sabun Palem (Bar)", price: "Rp. xxx.xxx", img: "/product.jpg" },
  { id: 3, name: "Sabun Palem",       price: "Rp. xxx.xxx", img: "/product.jpg" },
  { id: 4, name: "Sabun Palem",       price: "Rp. xxx.xxx", img: "/product.jpg" },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center" data-aos="fade-up">
          Produk Unggulan Kami
        </h2>
        <p className="text-center text-slate-600 mt-3 mb-10" data-aos="fade-up" data-aos-delay="100">
          Dipercaya konsumen, terbukti berkualitas.
        </p>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2" data-aos="fade-up" data-aos-delay="100">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.id}
              className="min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow hover:shadow-lg snap-center"
              data-aos="fade-up"
              data-aos-delay={150 + i * 100}
            >
              <div className="p-4">
                <div className="h-48 rounded-xl bg-slate-100 grid place-items-center overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full object-contain" />
                </div>
                <p className="mt-3 text-slate-500">{p.price}</p>
                <h3 className="font-semibold">{p.name}</h3>
                <a href="#detail" className="inline-block mt-3 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg">
                  Lihat Detail
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
