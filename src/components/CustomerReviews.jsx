// src/components/CustomerReviews.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Acell",
    text: "Suka banget sama sabun ini! Wanginya khas dan ampuh banget buat ngilangin noda membandel. Teksturnya juga lembut di tangan.",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Acell",
    text: "Kualitasnya stabil dari dulu. Busa banyak, bersih maksimal, dan harga tetap ramah di kantong. Recommended banget!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Acell",
    text: "Produk lokal dengan kualitas internasional! Packaging rapi, aroma segar, dan daya bersihnya mantap. Bakal repeat order terus.",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
];

export default function CustomerReviews() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="relative py-24 bg-gradient-to-b from-white via-[#E9FBF8]/70 to-[#F8FFFE] font-[Poppins] overflow-hidden"
      id="reviews"
    >
      {/* background blur accent */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-[#CFFAF4] blur-[150px] opacity-40" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[600px] h-[600px] bg-[#BDF7EF] blur-[200px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 text-center">
        {/* heading */}
        <h2
          className="text-[30px] sm:text-[38px] md:text-[44px] font-extrabold text-[#0F6F72] mb-4"
          data-aos="fade-up"
        >
          Ulasan Pelanggan
        </h2>
        <p
          className="text-slate-600 text-[16px] md:text-[17px] max-w-2xl mx-auto mb-14 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Kami selalu berkomitmen memberikan produk terbaik untuk pelanggan kami. Inilah pengalaman mereka.
        </p>

        {/* review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {REVIEWS.map((r, i) => (
            <div
              key={r.id}
              data-aos="zoom-in"
              data-aos-delay={100 + i * 100}
              className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              <img
                src={r.avatar}
                alt={r.name}
                className="h-20 w-20 rounded-full ring-4 ring-[#E9FBF8] shadow-md mb-4 object-cover"
              />
              <h3 className="font-semibold text-[#0F6F72] text-lg">{r.name}</h3>

              {/* rating stars */}
              <div className="flex gap-1 justify-center mt-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 text-[15px] leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        {/* soft bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
