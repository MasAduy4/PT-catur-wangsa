// src/pages/ProductsPage.jsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

/** ====== DATA DUMMY (ganti dengan data asli/API) ====== */
const ALL_PRODUCTS = [
  { id: 1,  name: "Sabun Susu Botol Milk",     category: "Sabun Susu Cair", price: 18000, rating: 4.7, img: "/foto/produk1.png",  isTrending: true,  createdAt: "2025-08-01" },
  { id: 2,  name: "Sabun Susu Botol Avocado",  category: "Sabun Susu Cair", price: 18500, rating: 4.8, img: "/foto/produk2.png",  isTrending: true,  createdAt: "2025-08-02" },
  { id: 3,  name: "Sabun Susu Botol Honey",    category: "Sabun Susu Cair", price: 18500, rating: 4.6, img: "/foto/produk3.png",  isTrending: false, createdAt: "2025-07-24" },
  { id: 4,  name: "Sabun Susu Pump Milk",      category: "Sabun Susu Cair", price: 22000, rating: 4.7, img: "/foto/produk4.png",  isTrending: false, createdAt: "2025-07-20" },
  { id: 5,  name: "Sabun Susu Pump Avocado",   category: "Sabun Susu Cair", price: 23000, rating: 4.9, img: "/foto/produk5.png",  isTrending: true,  createdAt: "2025-09-01" },
  { id: 6,  name: "Sabun Susu Pump Honey",     category: "Sabun Susu Cair", price: 23000, rating: 4.7, img: "/foto/produk6.png",  isTrending: false, createdAt: "2025-06-30" },
  { id: 7,  name: "Barsoap Milk",              category: "Barsoap",         price: 6000,  rating: 4.5, img: "/foto/produk7.png",  isTrending: true,  createdAt: "2025-05-10" },
  { id: 8,  name: "Barsoap Avocado",           category: "Barsoap",         price: 6500,  rating: 4.6, img: "/foto/produk8.png",  isTrending: false, createdAt: "2025-05-11" },
  { id: 9,  name: "Barsoap Honey",             category: "Barsoap",         price: 6500,  rating: 4.6, img: "/foto/produk9.png",  isTrending: false, createdAt: "2025-05-12" },
  { id: 10, name: "Lotion Susu Milk",          category: "Lotion",          price: 28000, rating: 4.8, img: "/foto/produk10.png", isTrending: true,  createdAt: "2025-08-15" },
  { id: 11, name: "Lotion Susu Avocado",       category: "Lotion",          price: 29000, rating: 4.7, img: "/foto/produk11.png", isTrending: false, createdAt: "2025-08-18" },
  { id: 12, name: "Lotion Susu Honey",         category: "Lotion",          price: 29000, rating: 4.7, img: "/foto/produk12.png", isTrending: false, createdAt: "2025-04-22" },
  { id: 13, name: "Sabun Susu Pouch Milk",     category: "Sabun Susu Cair", price: 15000, rating: 4.5, img: "/foto/produk13.png", isTrending: false, createdAt: "2025-07-01" },
  { id: 14, name: "Sabun Susu Pouch Avocado",  category: "Sabun Susu Cair", price: 15500, rating: 4.6, img: "/foto/produk14.png", isTrending: false, createdAt: "2025-07-03" },
  { id: 15, name: "Sabun Susu Pouch Honey",    category: "Sabun Susu Cair", price: 15500, rating: 4.6, img: "/foto/produk15.png", isTrending: false, createdAt: "2025-07-05" },
  { id: 16, name: "Gift Set Sabun Susu",       category: "Paket",           price: 52000, rating: 4.9, img: "/foto/produk16.png", isTrending: true,  createdAt: "2025-09-02" },
  { id: 17, name: "Bundle Barsoap 3pcs",       category: "Paket",           price: 17000, rating: 4.7, img: "/foto/produk17.png", isTrending: false, createdAt: "2025-08-09" },
  { id: 18, name: "Bundle Cair + Lotion",      category: "Paket",           price: 48000, rating: 4.8, img: "/foto/produk18.png", isTrending: true,  createdAt: "2025-09-05" },
  { id: 19, name: "Refill Lotion 500ml",       category: "Lotion",          price: 45000, rating: 4.6, img: "/foto/produk19.png", isTrending: false, createdAt: "2025-07-28" },
];

/** ====== KOMPONEN KARTU PRODUK ====== */
function ProductCard({ p }) {
  return (
    <div className="group rounded-2xl bg-white shadow/20 shadow-lg ring-1 ring-black/5 overflow-hidden hover:shadow-xl transition">
      <div className="relative bg-slate-50">
        <img
          src={p.img || "/product.jpg"}
          onError={(e) => (e.currentTarget.src = "/product.jpg")}
          alt={p.name}
          className="w-full aspect-[4/3] object-contain p-6 transition group-hover:scale-[1.02]"
        />
        <span className="absolute left-3 top-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
          {p.category}
        </span>
        {p.isTrending && (
          <span className="absolute right-3 top-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">
            Trending
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-slate-800 leading-snug line-clamp-2 min-h-[44px]">
          {p.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-bold text-emerald-700">
            Rp{p.price.toLocaleString("id-ID")}
          </p>
          <p className="text-sm text-slate-500">⭐ {p.rating}</p>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            className="flex-1 rounded-lg bg-emerald-600 text-white py-2.5 font-medium hover:bg-emerald-700"
            onClick={() => alert(`Tambah ke keranjang: ${p.name}`)}
          >
            Tambah
          </button>
          <Link
            to={`/produk/${p.id}`}
            className="rounded-lg border border-slate-200 px-3 py-2.5 text-slate-700 hover:bg-slate-50"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

/** ====== HALAMAN PRODUK ====== */
export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("Semua");
  const [sort, setSort] = useState("standard"); // standard | trending | rating | newest | low | high
  const [page, setPage] = useState(1);

  const PER_PAGE = 12;

  const categories = useMemo(() => {
    const set = new Set(ALL_PRODUCTS.map((p) => p.category));
    return ["Semua", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let rows = ALL_PRODUCTS.filter((p) => {
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.category.toLowerCase().includes(q.toLowerCase());
      const matchCat = category === "Semua" || p.category === category;
      return matchQ && matchCat;
    });

    switch (sort) {
      case "trending":
        rows = rows.slice().sort((a, b) => Number(b.isTrending) - Number(a.isTrending));
        break;
      case "rating":
        rows = rows.slice().sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        rows = rows.slice().sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      case "low":
        rows = rows.slice().sort((a, b) => a.price - b.price);
        break;
      case "high":
        rows = rows.slice().sort((a, b) => b.price - a.price);
        break;
      default:
      // standard
    }

    return rows;
  }, [q, category, sort]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const pageItems = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const changePage = (n) => {
    const clamped = Math.min(Math.max(1, n), totalPages);
    setPage(clamped);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100/70 min-h-screen">
      {/* Hero ringkas untuk “Produk” */}
      <section className="max-w-7xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800">
          Produk Kami
        </h1>
        <p className="mt-2 text-slate-600">
          Cari produk yang kamu mau, filter kategori, dan atur pengurutan—mirip
          tampilan toko dengan grid, dropdown sort, dan pagination 12 item per halaman.
        </p>
      </section>

      {/* Toolbar: search, kategori, sort */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl bg-white/70 backdrop-blur p-4 shadow ring-1 ring-black/5">
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-slate-600">
                Pencarian
              </label>
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Cari nama produk…"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Kategori
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">
                Pengurutan
              </label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
              >
                <option value="standard">Pengurutan standar</option>
                <option value="trending">Berdasar tren</option>
                <option value="rating">Rata-rata rating</option>
                <option value="newest">Terbaru</option>
                <option value="low">Termurah</option>
                <option value="high">Termahal</option>
              </select>
            </div>
          </div>

          <div className="mt-3 text-sm text-slate-600">
            Menampilkan{" "}
            <strong>
              {total === 0
                ? "0"
                : `${(page - 1) * PER_PAGE + 1}–${Math.min(
                    page * PER_PAGE,
                    total
                  )}`}
            </strong>{" "}
            dari <strong>{total}</strong> produk
          </div>
        </div>
      </section>

      {/* GRID PRODUK */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        {pageItems.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            Tidak ada produk yang sesuai.
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pageItems.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => changePage(page - 1)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40"
              disabled={page === 1}
            >
              ‹ Prev
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <button
                  key={n}
                  onClick={() => changePage(n)}
                  className={`px-3 py-2 rounded-lg border ${
                    active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {String(n).padStart(2, "0")}
                </button>
              );
            })}
            <button
              onClick={() => changePage(page + 1)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40"
              disabled={page === totalPages}
            >
              Next ›
            </button>
          </div>
        )}
      </section>

      {/* CTA ala marketplace */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl bg-white shadow ring-1 ring-black/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">
                Dapatkan di Marketplace
              </h3>
              <p className="text-slate-600">
                Pesan produk kami melalui marketplace kesayanganmu.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a className="px-4 py-2 rounded-full bg-emerald-600 text-white" href="#" onClick={(e)=>e.preventDefault()}>Shopee</a>
              <a className="px-4 py-2 rounded-full bg-emerald-600 text-white" href="#" onClick={(e)=>e.preventDefault()}>Tokopedia</a>
              <a className="px-4 py-2 rounded-full bg-emerald-600 text-white" href="#" onClick={(e)=>e.preventDefault()}>Lazada</a>
              <a className="px-4 py-2 rounded-full bg-emerald-600 text-white" href="#" onClick={(e)=>e.preventDefault()}>Blibli</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
