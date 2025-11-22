import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function History() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  const ITEMS = [
    {
      icon: "/why/Icon_jam.png",
      year: "1950",
      title: "Awal Mula",
      text: "Catur Wangsa Indah resmi berdiri pada tahun 1950, didirikan oleh Wong Kang Kuin sebagai usaha keluarga yang menjadi fondasi perusahaan hingga sekarang. Perjalanan kami bermula dari produksi sabun batangan, yang menjadi langkah awal dalam membangun kualitas dan kepercayaan konsumen.",
      align: "left",
    },
    {
      icon: "/history/Icon_kemas.png",
      year: "1970",
      title: "Ekspansi Produksi",
      text: "Pada tahun 1970, kami mulai memproduksi sabun cream di Tasikmalaya. Langkah ini menjadi pintu masuk bagi kami untuk mengembangkan lebih banyak produk pembersih dan memperluas perjalanan Caturwangsa Indah di industri home care.",
      align: "right",
    },
    { 
      icon: "/history/Icon_produksi.png",
      year: "Modernisasi",
      title: "Teknologi Terdepan",
      text: "Seiring perkembangan, Catur Wangsa Indah memodernisasi fasilitas produksinya dan melahirkan deterjen krim yang kemudian menjadi salah satu produk pembersih serbaguna paling populer di Indonesia. Kami juga menghadirkan berbagai bentuk produk seperti kemasan botol dan jerigen.",
      align: "left",
    },
    {
      icon: "/history/Icon_pabrik.png",
      year: "Saat Ini",
      title: "Inovasi Berkelanjutan",
      text: "Kini kami beroperasi sebagai produsen sabun dan deterjen dengan komitmen untuk terus mengadopsi teknologi terbaru dalam setiap proses produksi. Selain memenuhi kebutuhan pasar, kami juga menyediakan layanan maklon untuk membantu berbagai brand dan usaha.",
      align: "right",
    },
  ];

  return (
    <section
      id="history"
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-[#E8FAF7] to-white"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00B9BE]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-[#0F6F72]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-[#0F6F72]/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 md:mb-28" data-aos="fade-down">
          <span className="inline-block py-1 px-3 rounded-full bg-[#E0FAF8] text-[#0F6F72] text-sm font-semibold tracking-wider mb-4 border border-[#00B9BE]/20">
            PERJALANAN KAMI
          </span>
          <h2 className="text-[#0F6F72] text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Sejarah Perusahaan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Dari usaha keluarga sederhana hingga menjadi pemimpin industri, inilah jejak langkah kami dalam menghadirkan kebersihan untuk keluarga Indonesia.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#00B9BE]/20 via-[#0F6F72]/40 to-[#00B9BE]/20 rounded-full"></div>

          <div className="space-y-12 md:space-y-0">
            {ITEMS.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center md:justify-between relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 hidden md:flex">
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-[#0F6F72] shadow-lg flex items-center justify-center relative">
                    <div className="w-3 h-3 bg-[#00B9BE] rounded-full"></div>
                  </div>
                </div>

                <div
                  className="w-full md:w-5/12"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_20px_50px_-10px_rgba(15,111,114,0.15)] transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E0FAF8] rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-50"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#E0FAF8] flex items-center justify-center text-[#0F6F72] shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <span className="text-5xl font-black text-slate-100 absolute top-4 right-4 -z-10 select-none">
                          {item.year}
                        </span>
                        <span className="inline-block md:hidden py-1 px-3 rounded-full bg-[#0F6F72] text-white text-xs font-bold">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#0F6F72] mb-1">
                        {item.title}
                      </h3>
                      <div className="hidden md:block text-[#00B9BE] font-bold text-lg mb-4">
                        {item.year}
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}