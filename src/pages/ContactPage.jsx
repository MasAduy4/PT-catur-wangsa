// src/pages/ContactPage.jsx
import { useState } from "react";

/**
 * ContactPage — strip kontak + form yang mengirim ke Gmail via mailto:
 *
 * - Menambahkan Tanggal Pesanan (hari ini, otomatis)
 * - Menambahkan input Tanggal Pengiriman (user pilih)
 * - Tanggal dimasukkan ke template email secara rapi (format bahasa Indonesia)
 */

export default function ContactPage() {
  const CONTACT_ITEMS = [
    {
      key: "wa",
      img: "/logo/whatsapp.png",
      title: "WhatsApp",
      label: "+62 821-1622-3009",
      href: "https://wa.me/6282116223009",
    },
    {
      key: "mail",
      img: "/logo/gmail.png",
      title: "Email",
      label: "contact@agavi.id",
      href: "mailto:contact@agavi.id",
    },
    {
      key: "tokopedia",
      img: "/logo/tokopedia.png",
      title: "Tokopedia",
      label: "Tokopedia",
      href: "https://www.tokopedia.com/your-shop",
    },
    {
      key: "ig",
      img: "/logo/instagram.png",
      title: "Instagram",
      label: "agavi.official",
      href: "https://instagram.com/agavi.official",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8FAF7] via-[#D4F4EE] to-[#E8FAF7]">
      {/* CONTACT STRIP */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-8 md:py-10">
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
                  <div className="rounded-full p-2 bg-white/0">
                    <img
                      src={it.img}
                      alt={it.title}
                      className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain
                                 filter grayscale opacity-80
                                 transition-all duration-200
                                 group-hover:filter-none group-hover:opacity-100"
                      draggable={false}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  </div>

                  <div className="mt-3 text-center">
                    <div className="text-sm md:text-base font-semibold text-slate-700">
                      {it.label}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-6 md:px-10 lg:px-12 py-10">
        <div className="rounded-2xl bg-white/70 backdrop-blur p-6 md:p-8 shadow-[0_10px_30px_rgba(2,18,8,0.06)]">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Hubungi Kami</h2>
          <FormCard />
        </div>
      </section>

      {/* spacer */}
      <section className="py-24" />
    </main>
  );
}

/* =========================
   FormCard (mailto template) - DENGAN TANGGAL
   ========================= */
function FormCard() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [prefix] = useState("+62"); // tetap +62, readonly
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(""); // YYYY-MM-DD

  // alamat tujuan email
  const TO_EMAIL = "yudhapramudia29@gmail.com";

  // Format tanggal ke string bahasa Indonesia (contoh: Sabtu, 25 Oktober 2025)
  const formatFullDate = (dateObj) => {
    if (!dateObj) return "-";
    try {
      return dateObj.toLocaleString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateObj.toDateString();
    }
  };

  // Format tanggal + jam (untuk tanggal pesanan termasuk jam)
  const formatDateTime = (dateObj) => {
    if (!dateObj) return "-";
    try {
      return dateObj.toLocaleString("id-ID", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateObj.toString();
    }
  };

  // min untuk input tanggal pengiriman (tidak boleh kurang dari hari ini)
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDelivery = `${yyyy}-${mm}-${dd}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    // tanggal pesanan — sekarang
    const orderDate = new Date();
    const orderDateStr = formatDateTime(orderDate);

    // tanggal pengiriman yang diinginkan (jika ada)
    let deliveryDateStr = "-";
    if (deliveryDate) {
      // buat object Date dari string YYYY-MM-DD (set time ke 00:00)
      const d = new Date(`${deliveryDate}T00:00:00`);
      deliveryDateStr = formatFullDate(d);
    }

    // Subject email
    const subject = `Pesanan / Permintaan - ${name || "Pengunjung"}`;

    // Body template (formal, rapi)
    const bodyLines = [
      "Kepada Yth. Bapak/Ibu,",
      "",
      "Berikut adalah detail pesanan / permintaan yang dikirim melalui formulir kontak website:",
      "",
      `🕓 Tanggal Pesanan       : ${orderDateStr}`,
      `🚚 Tanggal Pengiriman    : ${deliveryDateStr}`,
      "",
      `👤 Nama Lengkap          : ${name || "-"}`,
      `📧 Alamat Email          : ${fromEmail || "-"}`,
      `📱 No. WhatsApp          : ${prefix}${phone || "-"}`,
      `🏠 Alamat Pengiriman     : ${address || "-"}`,
      "",
      "— Catatan / Instruksi —",
      "(silakan tambahkan keterangan/instruksi tambahan di sini jika perlu)",
      "",
      "Demikian informasi yang dapat kami sampaikan. Mohon konfirmasi dan tindak lanjutnya.",
      "",
      "Hormat kami,",
      "PT Catur Wangsa Indah",
    ];

    const body = encodeURIComponent(bodyLines.join("\n"));

    // Bangun mailto link (encode)
    const mailto = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Buka mail client / gmail
    // gunakan elemen <a> agar membuka di tab baru lebih dapat diandalkan
    const a = document.createElement("a");
    a.href = mailto;
    a.target = "_blank";
    a.rel = "noreferrer noopener";
    a.click();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <label className="block">
        <span className="block text-slate-700 font-semibold mb-2">Nama Lengkap</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukan nama anda"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
          required
        />
      </label>

      <label className="block">
        <span className="block text-slate-700 font-semibold mb-2">Email</span>
        <input
          type="email"
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          placeholder="Masukan email anda"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
          required
        />
      </label>

      <label className="block">
        <span className="block text-slate-700 font-semibold mb-2">No. Telepon / WA</span>
        <div className="flex gap-2">
          <input
            type="text"
            value={prefix}
            readOnly
            className="w-20 rounded-lg border border-slate-200 px-3 py-2 bg-slate-100 text-center"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="812345678"
            className="flex-1 rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 bg-white"
            required
          />
        </div>
      </label>

      <label className="block">
        <span className="block text-slate-700 font-semibold mb-2">Alamat Pengiriman</span>
        <textarea
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Masukan alamat lengkap untuk pengiriman"
          className="w-full rounded-lg border border-slate-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300 bg-white resize-none"
          required
        />
      </label>

      {/* Tanggal Pesanan (hari ini) - readonly */}
      <label className="block">
        <span className="block text-slate-700 font-semibold mb-2">Tanggal Pesanan</span>
        <input
          type="text"
          value={formatDateTime(new Date())}
          readOnly
          className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-slate-50 text-slate-700"
        />
      </label>

      {/* Tanggal Pengiriman (pilihan user) */}
      <label className="block">
        <span className="block text-slate-700 font-semibold mb-2">Tanggal Pengiriman (diinginkan)</span>
        <input
          type="date"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          min={minDelivery}
          className="w-full rounded-lg border border-slate-200 px-3 py-2 bg-white"
        />
        <p className="text-xs text-slate-500 mt-1">Pilih tanggal pengiriman yang Anda inginkan (opsional).</p>
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-xl w-full md:w-56 h-12 text-white font-semibold
                   bg-[#19BFB3] shadow-[0_10px_30px_rgba(25,191,179,0.35)] hover:brightness-95 active:translate-y-[1px] transition"
      >
        Kirim
      </button>
    </form>
  );
}
