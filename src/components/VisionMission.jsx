// src/components/VisionMission.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VisionMission() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-white via-[#E8FAF7]/80 to-[#D8F8F5] py-16 md:py-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-[#10474E] text-[28px] md:text-[34px] font-extrabold leading-tight">
            Visi &amp; Misi
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {/* Card Visi */}
            <div
              className="rounded-2xl p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-[#BFEFE9]/50 
                        bg-gradient-to-b from-[#F8FFFE] to-[#E8FAF7] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#D9F9F5] flex items-center justify-center ring-1 ring-[#00B9BE]/20">
                  <img
                    src="/vision/target.png"
                    alt="Visi"
                    className="h-7 w-7 md:h-8 md:w-8 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-[#0F6F72] text-[20px] md:text-[22px] font-bold mb-2">
                Visi
              </h3>
              <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed">
                Menjadi produsen sabun dan deterjen terpercaya di Indonesia
              </p>
            </div>

            {/* Card Misi */}
            <div
              className="rounded-2xl p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] ring-1 ring-[#BFEFE9]/50 
                        bg-gradient-to-b from-[#F8FFFE] to-[#E8FAF7] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex justify-center mb-4">
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[#D9F9F5] flex items-center justify-center ring-1 ring-[#00B9BE]/20">
                  <img
                    src="/vision/handshake.png"
                    alt="Misi"
                    className="h-7 w-7 md:h-8 md:w-8 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-[#0F6F72] text-[20px] md:text-[22px] font-bold mb-2">
                Misi
              </h3>
              <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed">
                Menghadirkan produk berkualitas, ramah lingkungan, dan terjangkau
              </p>
            </div>

            {/* Tagline */}
            <div
              className="sm:col-span-2 bg-[#E9F9F6] rounded-2xl p-4 text-center shadow-inner ring-1 ring-[#BFEFE9]/60"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-slate-700 text-[14px] md:text-[15px] italic">
                “Kami percaya kebersihan adalah awal dari kesejahteraan keluarga”
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="rounded-[24px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.12)] ring-1 ring-[#00B9BE]/10"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src="/gedung.png"
              alt="Gedung PT Catur Wangsa Indah"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
