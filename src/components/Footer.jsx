export default function Footer() {
    return (
      <footer id="contact" className="bg-teal-700 text-teal-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg">PT CATUR WANGSA INDAH</h3>
            <p className="opacity-90">Detergent &amp; Manufacturer</p>
            <div className="w-12 h-[2px] bg-teal-200 mt-2" />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Perusahaan</h4>
            <ul className="space-y-1 opacity-90">
              <li><a href="#about" className="hover:underline">Tentang Kami</a></li>
              <li><a href="#products" className="hover:underline">Produk</a></li>
              <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:underline">Syarat &amp; Ketentuan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Pelanggan</h4>
            <ul className="space-y-1 opacity-90">
              <li><a href="#contact" className="hover:underline">Hubungi Kami</a></li>
              <li className="flex gap-3 pt-2">
                <span>IG</span><span>TikTok</span><span>FB</span><span>YT</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-teal-100/80 py-4 text-sm border-t border-teal-600">
          © {new Date().getFullYear()} PT Catur Wangsa Indah. All rights reserved.
        </div>
      </footer>
    );
  }
  