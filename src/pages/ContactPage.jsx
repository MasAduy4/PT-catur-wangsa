// src/pages/ContactPage.jsx
import { useMemo } from "react";

/**
 * Cara pakai:
 * 1) Simpan icon kecil (SVG/PNG) di public/contact/:
 *    - phone.png, fax.png, marker.png (opsional whatsapp.png)
 * 2) Route di App.jsx:  <Route path="/kontak" element={<ContactPage />} />
 * 3) Navbar “Kontak kami” arahkan ke /kontak (sudah kamu lakukan).
 */

// Embed ke alamat: Jl. Mayor S.L. Tobing No.46, Tasikmalaya, Jawa Barat 46126
// (konversi dari maps.app.goo.gl ke embed search Google Maps)
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Jl.%20Mayor%20S.L.%20Tobing%20No.46%2C%20Tasikmalaya%2C%20Jawa%20Barat%2046126&z=17&output=embed";

// (opsional) link “Buka di Google Maps” tab baru
const MAP_OPEN_URL =
  "https://www.google.com/maps/search/?api=1&query=Jl.+Mayor+S.L.+Tobing+No.46,+Tasikmalaya,+Jawa+Barat+46126";

export default function ContactPage() {
  const mapSrc = useMemo(() => MAP_EMBED_URL, []);

  const INFO = [
    {
      img: "/contact/marker.png",
      alt: "Alamat",
      label:
        "Jl. Mayor SL Tobing No. 46 Tasikmalaya – West Java – Indonesia",
    },
    { img: "/contact/fax.png", alt: "Fax", label: "Fax : +62 265 332 603" },
    { img: "/contact/phone.png", alt: "Telepon", label: "Phone : +62 265 331 006" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8FAF7] via-[#D4F4EE] to-[#E8FAF7]">
      <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* KIRI: FORM + INFO */}
          <div
            className="bg-white/70 backdrop-blur rounded-2xl p-5 md:p-6 shadow-[0_8px_28px_rgba(2,18,8,0.08)]"
            data-aos="fade-right"
          >
            <FormCard />

            {/* INFO KONTAK */}
            <div className="mt-6 space-y-3">
              {INFO.map((it, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 80}
                >
                  {it.img ? (
                    <img
                      src={it.img}
                      alt={it.alt}
                      className="w-5 h-5 mt-1 opacity-80"
                    />
                  ) : (
                    <span className="text-teal-700 mt-1">•</span>
                  )}
                  <p className="text-slate-700 leading-relaxed">{it.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* KANAN: GOOGLE MAPS */}
          <div
            className="rounded-3xl overflow-hidden shadow-[0_18px_45px_rgba(2,18,8,0.12)] border border-white/50"
            data-aos="fade-left"
          >
            <div className="aspect-[16/12] md:aspect-[16/11] lg:aspect-[16/10]">
              <iframe
                title="Lokasi PT Catur Wangsa Indah"
                src={mapSrc}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* tombol buka di Google Maps (opsional, ala figma tidak mengganggu) */}
            <div className="p-3 text-right">
              <a
                href={MAP_OPEN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f766e] hover:underline"
              >
                Buka di Google Maps
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block"
                >
                  <path
                    d="M14 3h7v7m0-7L10 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21H3V3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ======================= */
/*        SUB KOMPONEN     */
/* ======================= */

function FormCard() {
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: sambungkan ke backend / form service
        alert("Terima kasih! Form kamu kami terima.");
      }}
      data-aos="fade-up"
    >
      <Field label="Nama Lengkap">
        <input
          type="text"
          required
          placeholder="Masukan nama anda"
          className="field-input"
        />
      </Field>

      <Field label="Email">
        <input
          type="email"
          required
          placeholder="Masukan email anda"
          className="field-input"
        />
      </Field>

      <Field label="No Telepon / WA">
        <div className="flex gap-2">
          <input
            type="text"
            value="+62"
            readOnly
            className="w-20 field-input text-center"
          />
          <input
            type="tel"
            required
            placeholder="812345678"
            className="flex-1 field-input"
          />
        </div>
      </Field>

      <Field label="Alamat">
        <textarea
          rows={4}
          placeholder="Masukan alamat anda"
          className="field-input resize-none"
        />
      </Field>

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

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-slate-700 font-semibold mb-2">{label}</span>
      {children}
    </label>
  );
}
