// src/components/VisionMission.jsx
import React from "react";

function Card({ title, desc, img, alt, delay = 0 }) {
  return (
    <div
      className="bg-white/90 rounded-2xl p-7 md:p-8 text-center shadow-[0_6px_26px_rgba(2,18,8,0.06)] ring-1 ring-teal-900/5
                 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(2,18,8,0.08)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Icon */}
      <div className="mx-auto mb-4 h-16 w-16 md:h-18 md:w-18 rounded-2xl bg-teal-50 ring-1 ring-teal-200/70 grid place-items-center overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={alt || title}
            className="h-9 w-9 md:h-10 md:w-10 object-contain"
            loading="lazy"
            width={40}
            height={40}
          />
        ) : null}
      </div>

      <h3 className="text-[22px] md:text-[24px] font-extrabold text-slate-800">{title}</h3>
      <p className="text-slate-600 mt-3 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function VisionMission({
  visionIcon = "/vision/target.png",
  missionIcon = "/vision/handshake.png",
  buildingImg = "/gedung.png",
}) {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#E8FAF7] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Title */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#1e5f6b]">
            Visi &amp; Misi
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Kartu kiri */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              title="Visi"
              img={visionIcon}
              alt="Ikon visi"
              desc="Menjadi produsen sabun dan deterjen terpercaya di Indonesia"
              delay={100}
            />
            <Card
              title="Misi"
              img={missionIcon}
              alt="Ikon misi"
              desc="Menghadirkan produk berkualitas, ramah lingkungan, dan terjangkau"
              delay={200}
            />

            {/* Quote / tagline */}
            <div
              className="sm:col-span-2 rounded-2xl bg-slate-100/70 text-slate-700 text-center px-5 py-5
                         ring-1 ring-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
              data-aos="fade-up"
              data-aos-delay={260}
            >
              <p className="text-[15px] md:text-base">
                “Kami percaya kebersihan adalah awal dari kesejahteraan keluarga”
              </p>
            </div>
          </div>

          {/* Gambar kanan */}
          <div
            className="rounded-[28px] overflow-hidden shadow-[0_18px_50px_rgba(2,18,8,0.12)] ring-1 ring-teal-900/10"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src={buildingImg}
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
