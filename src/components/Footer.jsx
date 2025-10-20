// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#6FA6A4] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-14">

        {/* Header tengah */}
        <div className="text-center">
          <h3 className="font-extrabold tracking-wide text-[18px] md:text-[20px]">
            PT CATUR WANGSA INDAH
          </h3>
          <p className="text-white/90 text-sm md:text-[15px] mt-1">
            Detergent &amp; Manufacturer
          </p>

          {/* garis tipis di tengah */}
          <div className="mt-3 flex items-center justify-center">
            <span className="block h-px w-20 bg-white/60" />
            <span className="mx-3 block h-[2px] w-24 bg-white" />
            <span className="block h-px w-20 bg-white/60" />
          </div>
        </div>

        {/* 3 kolom */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {/* Perusahaan */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">Perusahaan</h4>
            <ul className="space-y-3 text-white/95">
              <li>
                <a href="/about" className="hover:underline">Tentang Kami</a>
              </li>
              <li>
                <a href="/produk" className="hover:underline">Produk</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Syarat &amp; Ketentuan</a>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">Produk</h4>
            <ul className="space-y-3 text-white/95">
              <li><a href="/produk?c=sabun-cair" className="hover:underline">Sabun Cair</a></li>
              <li><a href="/produk?c=detergent-bubuk" className="hover:underline">Detergent Bubuk</a></li>
              <li><a href="/produk?c=detergent-cream" className="hover:underline">Detergent Cream</a></li>
              <li><a href="/produk?c=jerigen" className="hover:underline">Jerigen</a></li>
            </ul>
          </div>

          {/* Pelanggan */}
          <div>
            <h4 className="font-semibold text-[18px] mb-4">Pelanggan</h4>
            <ul className="space-y-3 text-white/95">
              <li>
                <a href="/#contact" className="hover:underline">Hubungi Kami</a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-4">
                  {/* IG */}
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="opacity-95 hover:opacity-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="opacity-95 hover:opacity-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M14 3v5.2a5.8 5.8 0 0 0 5 0V12a7.5 7.5 0 1 1-7.5-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="opacity-95 hover:opacity-100">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.3l.7-3H12V6.8c0-.5.4-.8.9-.8H15V3z" fill="currentColor"/>
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="opacity-95 hover:opacity-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 7.5a4 4 0 0 0-2.8-2.9C18.8 4 12 4 12 4s-6.8 0-8.7.6A4 4 0 0 0 .5 7.5 41.4 41.4 0 0 0 0 12c0 1.5.1 3 .5 4.5a4 4 0 0 0 2.8 2.9C5.2 20 12 20 12 20s6.8 0 8.7-.6a4 4 0 0 0 2.8-2.9c.4-1.5.5-3 .5-4.5 0-1.5-.1-3-.5-4.5ZM9.5 15.5v-7l6 3.5-6 3.5Z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* strip bawah */}
      <div className="text-center text-white/90 py-4 text-sm border-t border-white/20">
        © {new Date().getFullYear()} PT Catur Wangsa Indah. All rights reserved.
      </div>
    </footer>
  );
}
