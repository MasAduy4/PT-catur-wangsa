// src/pages/ProductsPage.jsx
import { useMemo, useState, useEffect } from "react";
import LogoLoop from "../components/LogoLoop";

/* ====== TAMBAHAN AOS ====== */
import AOS from "aos";
import "aos/dist/aos.css";

/* ========================= */

 /* ===== DATA PRODUK (ditambah field description) ===== */
const ALL_PRODUCTS = [
  { id: 1,  name: "Fresklin - Softener",         category: "Botol", price: 18000, rating: 4.7, img: "public/product/fresklin_softener.png",  isTrending: true,  createdAt: "2025-08-01", description: "Pelembut pakaian wangi bunga, melembutkan serat tanpa merusak kain. Cocok untuk mesin cuci & cuci tangan." },
  { id: 2,  name: "Clean Up - Detergen Cair ",   category: "Botol", price: 18500, rating: 4.8, img: "public/product/cleanup_detergenCair.png",  isTrending: true,  createdAt: "2025-08-02", description: "Detergen cair serbaguna untuk noda sehari-hari, busa lembut dan mudah dibilas." },
  { id: 3,  name: "Bomber - Wash dishes ",       category: "Botol", price: 18500, rating: 4.6, img: "public/product/palem_cuciPiring.png",  isTrending: false, createdAt: "2025-07-24", description: "Cairan pencuci piring ramah tangan, efektif mengangkat minyak dan bau." },
  { id: 4,  name: "Palem - Hand Soap",           category: "Botol", price: 22000, rating: 4.7, img: "public/product/palem_handsoap.png",  isTrending: false, createdAt: "2025-07-20", description: "Sabun tangan lembut dengan aroma segar, membersihkan tanpa membuat kulit kering." },
  { id: 5,  name: "Cemara - Pembersih Lantai",   category: "Botol", price: 23000, rating: 4.9, img: "public/product/cemara_pembersihLantai.png",  isTrending: true,  createdAt: "2025-09-01", description: "Pembersih lantai dengan formula anti-kotor, menghilangkan noda tanpa meninggalkan residu." },
  { id: 6,  name: "Cemara - fragrant carbolic",  category: "Botol", price: 23000, rating: 4.7, img: "public/product/cemara_fragrantCarbol.png",  isTrending: false, createdAt: "2025-06-30", description: "Carbolic wangi untuk permukaan kamar mandi, efektif membunuh kuman dan menyegarkan." },
  { id: 7,  name: "Bomber - Washing machines",   category: "Detergent Bubuk", price: 6000,  rating: 4.5, img: "public/product/Bomber_WashingMachines.png",  isTrending: true,  createdAt: "2025-05-10", description: "Detergen bubuk ekonomis, cocok untuk mesin cuci dengan daya bersih tinggi." },
  { id: 8,  name: "Fres Klin - FK 50",           category: "Detergent Bubuk", price: 6500,  rating: 4.6, img: "/foto/produk8.png",  isTrending: false, createdAt: "2025-05-11", description: "Varian kecil Fres Klin untuk penggunaan rumah tangga, wangi tahan lama." },
  { id: 9,  name: "Fres Klin - FK 500",          category: "Detergent Bubuk", price: 6500,  rating: 4.6, img: "public/product/Fresklin_FK500.png",  isTrending: false, createdAt: "2025-05-12", description: "Kemasan menengah untuk kebutuhan keluarga, efektif mengangkat noda berat." },
  { id: 10, name: "Fres Klin - FK 1.000",        category: "Detergent Bubuk", price: 28000, rating: 4.8, img: "public/product/Fresklin_FK1000.png", isTrending: true,  createdAt: "2025-08-15", description: "Kemasan besar untuk kebutuhan lebih hemat, formula cepat larut." },
  { id: 11, name: "Detergent Cream Palem toples",category: "Detergent Cream", price: 29000, rating: 4.7, img: "/foto/produk11.png", isTrending: false, createdAt: "2025-08-18", description: "Krim deterjen ideal untuk pakaian halus dan noda minyak." },
  { id: 12, name: "Sabun Cream Putih",           category: "Detergent Cream", price: 29000, rating: 4.7, img: "public/product/Sabun_CreamPutih.png", isTrending: false, createdAt: "2025-04-22", description: "Sabun cream serbaguna dengan busa lembut, aman untuk kulit." },
  { id: 13, name: "Sabun Jelly Serba guna",      category: "Detergent Cream", price: 15000, rating: 4.5, img: "public/product/Sabun_JellySerbaguna.png", isTrending: false, createdAt: "2025-07-01", description: "Sabun jelly praktis untuk cuci tangan & serbaguna di rumah." },
  { id: 14, name: "Cemara Pembersih Lantai",     category: "Jerigen 5L", price: 15500, rating: 4.6, img: "/foto/produk14.png", isTrending: false, createdAt: "2025-07-03", description: "Jerigen 5L pembersih lantai, pas untuk usaha dan area luas." },
  { id: 15, name: "Clean Up Detergen Cair",      category: "Jerigen 5L", price: 15500, rating: 4.6, img: "/foto/produk15.png", isTrending: false, createdAt: "2025-07-05", description: "Detergen cair kemasan besar, ekonomis untuk laundry kecil." },
  { id: 16, name: "Fresklin Softener",           category: "Jerigen 5L", price: 52000, rating: 4.9, img: "/foto/produk16.png", isTrending: true,  createdAt: "2025-09-02", description: "Pelembut kemasan jerigen untuk penggunaan bisnis laundry." },
  { id: 17, name: "Palem Handsoap",              category: "Jerigen 5L", price: 17000, rating: 4.7, img: "/foto/produk17.png", isTrending: false, createdAt: "2025-08-09", description: "Handsoap kemasan besar, hemat dan higienis untuk area publik." },
  { id: 18, name: "Paket",                       category: "Paket", price: 48000, rating: 4.8, img: "public/product/Paket_Bunding1.png", isTrending: true,  createdAt: "2025-09-05", description: "Bundling hemat berisi kombinasi pembersih rumah tangga populer." },
  { id: 19, name: "Paket",                       category: "Paket", price: 45000, rating: 4.6, img: "public/product/Pake_Bundling2.png", isTrending: false, createdAt: "2025-07-28", description: "Paket bundling alternatif dengan komposisi produk berbeda." },
];

/* ====== KARTU PRODUK (hanya tombol DETAIL pada hero) ====== */
function ProductCard({ p, onOpenDetail }) {
  const src = (p.img || "/product.jpg").replace(/^public\//, "/");

  return (
    <div
      /* ====== TAMBAHAN AOS: fade-up dengan delay berdasarkan id (ms) ====== */
      data-aos="fade-up"
      data-aos-delay={p.id * 40}
      data-aos-once="true"
      className="group rounded-2xl bg-white shadow/20 shadow-lg ring-1 ring-black/5 overflow-hidden hover:shadow-xl transition"
    >
      <div className="relative bg-slate-50 h-64 md:h-72 lg:h-80">
        <img
          src={src}
          onError={(e) => (e.currentTarget.src = "/product.jpg")}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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

        {/* Hanya tombol Detail di hero */}
        <div className="mt-3 flex gap-2">
          <button
            className="flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-slate-700 hover:bg-slate-50"
            onClick={() => onOpenDetail(p)}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

/* ====== HALAMAN PRODUK DENGAN MODAL DETAIL ====== */
export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("Semua");
  const [sort, setSort] = useState("standard");
  const [page, setPage] = useState(1);

  const [selected, setSelected] = useState(null); // product yang sedang dibuka di modal

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

  /* buka modal detail */
  const openDetail = (product) => {
    setSelected(product);
    // disable scroll belakang saat modal terbuka
    document.body.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  // tangani ESC untuk tutup modal
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeDetail();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ====== TAMBAHAN AOS: inisialisasi/refresh AOS lokal ====== */
  useEffect(() => {
    // inisialisasi AOS (aman jika App.jsx juga sudah inisialisasi)
    if (AOS && typeof AOS.init === "function") {
      AOS.init({
        duration: 700,
        easing: "ease-out",
        once: true,
        offset: 80,
      });
    }
  }, []);

  // refresh AOS setiap kali daftar item berubah supaya delay anim ter-baca AOS
  useEffect(() => {
    if (AOS && typeof AOS.refresh === "function") {
      AOS.refresh();
    }
  }, [pageItems, q, category, sort, page]);
  /* ===================================================== */

  const marketplaceLogos = [
    { src: "public/logo/shopee.png", alt: "Shopee", href: "#", title: "Shopee", width: 192, height: 192 },
    { src: "public/logo/tokopedia.png", alt: "Tokopedia", href: "#", title: "Tokopedia", width: 192, height: 192 },
    { src: "public/logo/tiktok.jpg", alt: "Tiktok", href: "#", title: "Tiktok", width: 192, height: 192 },
  ];

  return (
    <main className="bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100/70 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 pt-28 pb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-800">Produk Kami</h1>
        <p className="mt-2 text-slate-600">Cari produk yang kamu mau, filter kategori, dan atur pengurutan.</p>
      </section>

      {/* Toolbar */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="rounded-2xl bg-white/70 backdrop-blur p-4 shadow ring-1 ring-black/5">
          <div className="grid gap-3 md:grid-cols-3">
            <div>
              <label className="block text-sm font-medium text-slate-600">Pencarian</label>
              <input
                value={q}
                onChange={(e) => { setQ(e.target.value); setPage(1); }}
                placeholder="Cari nama produk…"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">Kategori</label>
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value); setPage(1); }}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300"
              >
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-600">Pengurutan</label>
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
            <strong>{total === 0 ? "0" : `${(page - 1) * PER_PAGE + 1}–${Math.min(page * PER_PAGE, total)}`}</strong>{" "}
            dari <strong>{total}</strong> produk
          </div>
        </div>
      </section>

      {/* GRID PRODUK */}
      <section className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        {pageItems.length === 0 ? (
          <div className="text-center py-16 text-slate-500">Tidak ada produk yang sesuai.</div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pageItems.map((p) => (
              <ProductCard key={p.id} p={p} onOpenDetail={openDetail} />
            ))}
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button onClick={() => changePage(page - 1)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40" disabled={page === 1}>‹ Prev</button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                <button key={n} onClick={() => changePage(n)} className={`px-3 py-2 rounded-lg border ${active ? "bg-emerald-600 text-white border-emerald-600" : "bg-white border-slate-200 hover:bg-slate-50"}`}>
                  {String(n).padStart(2, "0")}
                </button>
              );
            })}
            <button onClick={() => changePage(page + 1)} className="px-3 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40" disabled={page === totalPages}>Next ›</button>
          </div>
        )}
      </section>

      {/* CTA Marketplace */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-2xl bg-white shadow ring-1 ring-black/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">Dapatkan di Marketplace</h3>
              <p className="text-slate-600">Pesan produk kami melalui marketplace kesayanganmu.</p>
            </div>
            <div className="w-full md:w-1/2">
              <LogoLoop logos={marketplaceLogos} speed={80} direction="left" logoHeight={96} gap={56} style={{ '--logoloop-logoHeight': 'clamp(48px, 8vw, 96px)' }} pauseOnHover={true} fadeOut={true} fadeOutColor="#ffffff" scaleOnHover={true} ariaLabel="Logo marketplace" width="100%"/>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL DETAIL PRODUK */}
      {selected && (
        <div
          aria-modal="true"
          role="dialog"
          /* tambahkan anim AOS juga pada modal wrapper */
          data-aos="zoom-in"
          data-aos-once="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* backdrop */}
          <div onClick={closeDetail} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full mx-4 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative bg-slate-50 h-80 md:h-auto">
                <img
                  src={(selected.img || "/product.jpg").replace(/^public\//, "/")}
                  alt={selected.name}
                  onError={(e) => (e.currentTarget.src = "/product.jpg")}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-800">{selected.name}</h2>
                <p className="text-sm text-slate-500 mt-1">{selected.category} • ⭐ {selected.rating}</p>

                <div className="mt-4 text-emerald-700 font-bold text-lg">Rp{selected.price.toLocaleString("id-ID")}</div>

                <div className="mt-4 text-slate-600">
                  <p>{selected.description}</p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    className="rounded-lg border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50"
                    onClick={closeDetail}
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
