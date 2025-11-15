// src/pages/ContactPage.jsx
import { useState } from "react";

export default function ContactPage() {
  const CONTACT_ITEMS = [
    {
      key: "wa",
      img: "/logo/whatsapp.png",
      title: "WhatsApp",
      label: "originalsabunpalem",
      href: "https://wa.me/6289683827800",
    },
    {
      key: "mail",
      img: "/logo/gmail.png",
      title: "Email",
      label: "originalsabunpalem@gmail.com",
      href: "mailto:originalsabunpalem@gmail.com",
    },
    {
      key: "tokopedia",
      img: "/logo/tokopedia.png",
      title: "Tokopedia",
      label: "Sabun Palem Original",
      href: "https://tokopedia.link/mHWmzN105Xb",
    },
    {
      key: "ig",
      img: "/logo/instagram.png",
      title: "Instagram",
      label: "sabunpalem_official",
      href: "https://www.instagram.com/sabunpalem_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  const FULL_ADDRESS =
    "Jl. Mayor S.L. Tobing No.46, Tugujaya, Kec. Cihideung, Kab. Tasikmalaya, Jawa Barat 46126";

  const MAP_QUERY = FULL_ADDRESS;
  const MAP_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    MAP_QUERY
  )}`;
  const MAP_IFRAME_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
    MAP_QUERY
  )}&output=embed`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8FAF7] via-[#D4F4EE] to-[#E8FAF7] pt-32 md:pt-36 pb-16">
      {/* CONTACT STRIP */}
      <section className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-10">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-8 justify-items-center w-full">
            {CONTACT_ITEMS.map((it) => (
              <a
                key={it.key}
                href={it.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={it.title}
                className="group flex flex-col items-center no-underline"
              >
                <div className="rounded-full p-2">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain filter grayscale opacity-80 
                               transition-all duration-300 group-hover:filter-none group-hover:opacity-100"
                    draggable={false}
                  />
                </div>
                <div className="mt-2 text-center">
                  <div className="text-sm md:text-base font-semibold text-slate-700">
                    {it.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="rounded-2xl bg-white/80 backdrop-blur p-6 md:p-8 shadow-[0_10px_30px_rgba(2,18,8,0.06)]">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Hubungi Kami
            </h2>
            <FormCard />
          </div>

          {/* Map + Info */}
          <aside className="rounded-2xl bg-white/80 backdrop-blur p-6 md:p-8 shadow-[0_10px_30px_rgba(2,18,8,0.06)] flex flex-col">
            <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">
              Lokasi Kami
            </h3>

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm">
              <div className="w-full h-56 sm:h-64 md:h-72 bg-slate-100">
                <iframe
                  title="peta-lokasi"
                  src={MAP_IFRAME_SRC}
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            <div className="mt-4 text-slate-600 flex-1">
              <p className="text-sm leading-relaxed">
                <span className="block font-medium text-slate-800">
                  Alamat Lengkap:
                </span>
                <span className="block mt-1">{FULL_ADDRESS}</span>
              </p>
              <p className="text-xs text-slate-500 mt-3">
                Jika peta tidak tampil, silakan klik tombol di bawah untuk membuka
                Google Maps langsung.
              </p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href={MAP_SEARCH_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-4 py-2 font-medium hover:bg-emerald-700 transition w-full sm:w-auto text-center"
              >
                Buka di Google Maps
              </a>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(MAP_SEARCH_URL);
                  alert("Link Maps disalin ke clipboard.");
                }}
                className="rounded-lg border border-slate-200 px-4 py-2 text-slate-700 hover:bg-slate-50 transition w-full sm:w-auto text-center"
              >
                Salin Link
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* =========================
   FORM CONTACT
   ========================= */
function FormCard() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [prefix] = useState("+62");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const TO_EMAIL = "originalsabunpalem@gmail.com";

  const formatFullDate = (dateObj) =>
    dateObj?.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const formatDateTime = (dateObj) =>
    dateObj?.toLocaleString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDelivery = `${yyyy}-${mm}-${dd}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderDateStr = formatDateTime(new Date());
    const deliveryDateStr = deliveryDate
      ? formatFullDate(new Date(`${deliveryDate}T00:00:00`))
      : "-";

    const subject = `Pesanan / Permintaan - ${name || "Pengunjung"}`;
    const body = encodeURIComponent(
      [
        "Kepada Yth. Bapak/Ibu,",
        "",
        "Berikut adalah detail pesanan:",
        "",
        `🕓 Tanggal Pesanan : ${orderDateStr}`,
        `🚚 Tanggal Pengiriman : ${deliveryDateStr}`,
        "",
        `👤 Nama : ${name}`,
        `📧 Email : ${fromEmail}`,
        `📱 No. WhatsApp : ${prefix}${phone}`,
        `🏠 Alamat : ${address}`,
        "",
        "Hormat kami,",
        "Pengirim",
      ].join("\n")
    );

    window.open(
      `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label>
        <span className="block text-slate-700 font-semibold mb-1">
          Nama Lengkap
        </span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama Anda"
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-emerald-300 outline-none"
        />
      </label>

      <label>
        <span className="block text-slate-700 font-semibold mb-1">Email</span>
        <input
          type="email"
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          placeholder="Masukkan email Anda"
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-emerald-300 outline-none"
        />
      </label>

      <label>
        <span className="block text-slate-700 font-semibold mb-1">
          No. Telepon / WA
        </span>
        <div className="flex gap-2">
          <input
            value={prefix}
            readOnly
            className="w-20 rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 text-center"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="812345678"
            required
            className="flex-1 rounded-lg border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-emerald-300 outline-none"
          />
        </div>
      </label>

      <label>
        <span className="block text-slate-700 font-semibold mb-1">
          Alamat Pengiriman
        </span>
        <textarea
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Masukkan alamat lengkap"
          required
          className="w-full rounded-lg border border-slate-200 px-3 py-2 resize-none focus:ring-2 focus:ring-emerald-300 outline-none"
        />
      </label>

      <label>
        <span className="block text-slate-700 font-semibold mb-1">
          Tanggal Pesanan
        </span>
        <input
          type="text"
          value={formatDateTime(new Date())}
          readOnly
          className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-slate-50"
        />
      </label>

      <label>
        <span className="block text-slate-700 font-semibold mb-1">
          Tanggal Pengiriman (opsional)
        </span>
        <input
          type="date"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          min={minDelivery}
          className="w-full rounded-lg border border-slate-200 px-3 py-2"
        />
      </label>

      <button
        type="submit"
        className="mt-2 rounded-lg w-full md:w-56 h-12 text-white font-semibold bg-[#19BFB3] shadow-[0_10px_25px_rgba(25,191,179,0.35)] hover:brightness-95 active:translate-y-[1px] transition"
      >
        Kirim
      </button>
    </form>
  );
}
