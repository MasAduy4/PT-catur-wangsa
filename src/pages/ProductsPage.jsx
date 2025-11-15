// src/pages/ProductsPage.jsx
import { useMemo, useState, useEffect } from "react";
import LogoLoop from "../components/LogoLoop";

/* ====== TAMBAHAN AOS ====== */
import AOS from "aos";
import "aos/dist/aos.css";

/* ========================= */

 /* ===== DATA PRODUK (ditambah field description) ===== */
const ALL_PRODUCTS = 
[
  { id: 1,  name: "Detergent Bomber - Washing machines 800 gram",   category: "Detergent Bubuk", price: 12000,  rating: 5.0, img: "public/product/Bomber_WashingMachines.png",  isTrending: false,  createdAt: "2025-05-10", description: "Detergen bubuk khusus mesin cuci — cepat larut, mengangkat noda membandel, dan meninggalkan aroma segar. Hemat pemakaian, cocok untuk cucian keluarga sehari-hari." },
  { id: 2,  name: "Detergent Bubuk Fres Klin - 24 pcs",           category: "Detergent Bubuk", price: 18000,  rating: 5.0, img: "public/product/Detergen_BubukFresklin_FK50.png",  isTrending: true, createdAt: "2025-05-11", description: "Pack 24 sachet praktis (27g/sachet). Formula pembersih optimal yang mudah dilarutkan, wangi tahan lama, nyaman dibawa untuk perjalanan atau kos." },
  { id: 3,  name: "Detergent Bubuk Fres Klin - 10 pcs",          category: "Detergent Bubuk", price: 4000,  rating: 5.0, img: "public/product/Fresklin_FK500.png",  isTrending: true, createdAt: "2025-05-12", description: "Kemasan keluarga praktis 220g — dirancang untuk mengangkat noda sehari-hari sambil menjaga warna pakaian tetap cerah dan serat tetap lembut." },
  { id: 4,  name: "Detergent Bubuk Fres Klin - 1 pcs",        category: "Detergent Bubuk", price: 10000, rating: 5.0, img: "public/product/Fresklin_FK1000.png", isTrending: true,  createdAt: "2025-08-15", description: "Kemasan besar ekonomis 610g — hemat dan kuat membersihkan, ideal untuk keluarga besar atau pencucian rutin. Cepat larut dan ramah mesin cuci." },
  { id: 5,  name: "Fresklin - Softener",         category: "Botol", price: 8500, rating: 5.0, img: "public/product/fresklin_softener.png",  isTrending: false,  createdAt: "2025-08-01", description: "Pelembut pakaian wangi bunga — melembutkan serat, mengurangi kusut, dan memberi aroma menenangkan. Isi 450ml, sempurna untuk hasil cucian yang lebih halus." },
  { id: 6,  name: "Clean Up - Detergen Cair",    category: "Botol", price: 8000, rating: 5.0, img: "public/product/cleanup_detergenCair.png",  isTrending: false,  createdAt: "2025-08-02", description: "Detergen cair serbaguna yang ampuh melawan noda dan minyak, namun lembut di tangan. Mudah dibilas dan praktis untuk pemakaian harian. Isi 450ml." },
  { id: 7,  name: "Bomber - Wash dishes",        category: "Botol", price: 7000, rating: 5.0, img: "public/product/palem_cuciPiring.png",  isTrending: true, createdAt: "2025-07-24", description: "Cairan pencuci piring formula kuat yang cepat mengangkat lemak, mudah dibilas, dan lembut di kulit. Memberi hasil bersih dan wangi segar. Isi 450ml." },
  { id: 8,  name: "Palem - Hand Soap",           category: "Botol", price: 7000, rating: 5.0, img: "public/product/palem_handsoap.png",  isTrending: false, createdAt: "2025-07-20", description: "Sabun tangan lembut dengan aroma menyegarkan — membersihkan secara higienis tanpa membuat kulit kering. Cocok untuk penggunaan sehari-hari. Isi 450ml." },
  { id: 9,  name: "Cemara - Pembersih Lantai",   category: "Botol", price: 6500, rating: 5.0, img: "public/product/cemara_pembersihLantai.png",  isTrending: false,  createdAt: "2025-09-01", description: "Pembersih lantai praktis yang efektif mengangkat kotoran dan noda membandel, meninggalkan permukaan berkilau dan aroma segar. Isi 450ml." },
  { id: 10, name: "Cemara - Fragrant Carbolic",  category: "Botol", price: 7000, rating: 5.0, img: "public/product/cemara_fragrantCarbol.png",  isTrending: false, createdAt: "2025-06-30", description: "Karbol wangi siap pakai untuk membersihkan dan mendisinfeksi toilet, kamar mandi, dan area umum — membunuh kuman sambil meninggalkan aroma bersih. Isi 450ml." },
  { id: 11, name: "Detergent Jeruk",             category: "Detergent Cream", price: 1500, rating: 5.0, img: "public/product/Detergent_Jeruk.png", isTrending: true, createdAt: "2025-08-18", description: "Krim detergen aroma jeruk 130g — lembut di tangan tetapi kuat melawan noda minyak. Cocok untuk pakaian halus dan noda membandel." },
  { id: 12, name: "Sabun Cream Putih",           category: "Detergent Cream", price: 2000, rating: 5.0, img: "public/product/Sabun_CreamPutih.png", isTrending: false, createdAt: "2025-04-22", description: "Sabun cream serbaguna 160g dengan busa lembut — ideal untuk cuci tangan maupun perawatan pakaian kecil, meninggalkan aroma bersih yang lembut." },
  { id: 13, name: "Sabun Jelly Serba guna - 400 gram",      category: "Detergent Cream", price: 15000, rating: 5.0, img: "public/product/Sabun_JellySerbaguna.png", isTrending: false, createdAt: "2025-07-01", description: "Sabun jelly serbaguna 400g — tekstur lembut, mudah digunakan, dan efektif membersihkan peralatan rumah tangga serta tangan dengan aroma segar." },
  { id: 14, name: "Cemara Pembersih Lantai",     category: "Jerigen 5L", price: 55500, rating: 5.0, img: "public/product/Jerigen Cemara Pembersih Lantai.png", isTrending: false, createdAt: "2025-07-03", description: "Pembersih lantai kemasan 5L untuk area luas — formula kuat mengangkat noda membandel dan memberikan kilau tahan lama. Ekonomis untuk usaha dan rumah besar." },
  { id: 15, name: "Clean Up Detergen Cair",      category: "Jerigen 5L", price: 75500, rating: 5.0, img: "public/product/Jerigen CleanUp_Detergen Cair.png", isTrending: false, createdAt: "2025-07-05", description: "Detergen cair kemasan 5L yang ekonomis dan efektif untuk usaha laundry atau penggunaan komersial — mampu mengatasi noda berat dengan efisien." },
  { id: 16, name: "Fresklin Softener",           category: "Jerigen 5L", price: 95000, rating: 5.0, img: "public/product/Jerigen Fresklin Softener.png", isTrending: false,  createdAt: "2025-09-02", description: "Pelembut pakaian kemasan 5L — wangi tahan lama dan membantu melunakkan serat untuk hasil cucian yang lembut dan rapi. Ideal untuk laundry profesional." },
  { id: 17, name: "Palem Handsoap",              category: "Jerigen 5L", price: 62000, rating: 5.0, img: "public/product/Jerigen HandSoap Palem.png", isTrending: false, createdAt: "2025-08-09", description: "Sabun tangan cair kemasan 5L — higienis, lembut, dan praktis untuk area publik seperti kantor, restoran, atau sekolah." },
  { id: 18, name: "Jerigen Bomber",              category: "Jerigen 5L", price: 35000, rating: 5.0, img: "public/product/Jerigen Bomber.png", isTrending: false, createdAt: "2025-08-25", description: "Cairan pembersih serbaguna 5L — efektif mengangkat lemak dan noda pada berbagai permukaan, pilihan ekonomis untuk usaha." },
  { id: 19, name: "Jerigen Cemara Karbol Wangi", category: "Jerigen 5L", price: 56000, rating: 5.0, img: "public/product/Jerigen Cemara Karbol Wangi.png", isTrending: false, createdAt: "2025-09-03", description: "Karbol wangi kemasan 5L — pembersih dan disinfektan yang ampuh, memberikan aroma segar dan kebersihan menyeluruh di area besar." },
  { id: 20, name: "Jerigen Palem Pencuci Piring (Non Parfum)", category: "Jerigen 5L", price: 18500, rating: 5.0, img: "public/product/Jerigen Palem Pencuci Piring_Non Parfum.png", isTrending: false, createdAt: "2025-08-20", description: "Pencuci piring non-parfum 5L — dirancang untuk kulit sensitif, tetap ampuh mengangkat minyak dan mudah dibilas tanpa residu wangi." },
  { id: 21, name: "Jerigen Palem Pencuci Piring", category: "Jerigen 5L", price: 65500, rating: 5.0, img: "public/product/Jerigen Palem Pencuci Piring.png", isTrending: true, createdAt: "2025-08-21", description: "Pencuci piring 5L dengan busa efektif dan wangi segar — membersihkan lemak dengan cepat dan nyaman untuk pemakaian rumah tangga maupun usaha kuliner." },
  { id: 22, name: "Detergent Bubuk Bomber Karung", category: "Karung", price: 70000, rating: 5.0, img: "public/product/Detergent Bubuk Bomber Karung.png", isTrending: false, createdAt: "2025-09-10", description: "Detergen bubuk kemasan karung untuk kebutuhan industri dan laundry skala besar — performa tinggi, hemat biaya, dan andal untuk pembersihan massal." },
  { id: 23, name: "Paket Bundling - Detergent bubuk & Wash dishes",       category: "Paket", price: 15500, rating: 5.0, img: "public/product/Paket_Bunding1.png", isTrending: true,  createdAt: "2025-09-05", description: "Paket hemat populer: detergen bubuk + cairan pencuci piring — solusi lengkap untuk kebutuhan kebersihan rumah tangga dengan harga terjangkau." },
  { id: 24, name: "Paket Bundling - Detergent Bomber & Fresklin Softener",                       category: "Paket", price: 17500, rating: 5.0, img: "public/product/Pake_Bundling2.png", isTrending: true, createdAt: "2025-07-28", description: "Paket premium berisi detergen Bomber dan pelembut Fresklin — kombinasi ideal untuk cucian yang bersih, wangi, dan terasa lembut." }
]




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
    { src: "/logo/shopee.png", alt: "Shopee", href: "https://shopee.co.id/sabunpalemoriginal", title: "Shopee", width: 192, height: 192 },
    { src: "/logo/tokopedia.png", alt: "Tokopedia", href: "https://tokopedia.link/mHWmzN105Xb", title: "Tokopedia", width: 192, height: 192 },
    { src: "/logo/tiktok.jpg", alt: "Tiktok", href: "https://www.tiktok.com/@sabunpalemoriginal?is_from_webapp=1&sender_device=pc", title: "Tiktok", width: 192, height: 192 },
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
