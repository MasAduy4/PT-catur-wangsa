// src/components/Hero.jsx
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Pola garis wave
function WavePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
      aria-hidden="true"
    >
      <defs>
        <pattern id="waves" width="120" height="120" patternUnits="userSpaceOnUse">
          <path d="M0 60 Q60 0 120 60 T240 60" fill="none" stroke="white" strokeWidth="1.4" />
          <path d="M0 120 Q60 60 120 120 T240 120" fill="none" stroke="white" strokeWidth="1.4" />
        </pattern>
      </defs>
      <rect width="1440" height="900" fill="url(#waves)" />
    </svg>
  );
}

const SLIDES = [
  {
    id: 1,
    tag: "SABUN SUSU CAIR",
    title: ["Sabun", "Palem"],
    desc:
      "Produk pembersih rumah tangga dan industri. Melayani pembelian partai besar, makloon & eceran.",
    img: "/hero1.png",
  },
  {
    id: 2,
    tag: "SABUN SUSU CAIR",
    title: ["Sabun", "Palem"],
    desc:
      "Mengandung ekstrak susu kambing bermolekul kecil yang cepat diserap dan bantu melembutkan kulit.",
    img: "/hero2.png",
  },
  {
    id: 3,
    tag: "SABUN SUSU CAIR",
    title: ["Sabun", "Palem"],
    desc: "Varian menjaga kelembapan sehingga kulit terasa halus & nyaman.",
    img: "/hero3.png",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const tRef = useRef(null);
  const slide = SLIDES[index];

  const start = () => {
    stop();
    tRef.current = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3500);
  };
  const stop = () => tRef.current && clearInterval(tRef.current);
  useEffect(() => {
    start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (dir) => {
    stop();
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
    start();
  };

  const imgVar = {
    initial: { opacity: 0, rotate: -6, scale: 1.04, x: 10 },
    animate: { opacity: 1, rotate: 0, scale: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
    exit: { opacity: 0, rotate: 6, scale: 0.98, x: -10, transition: { duration: 0.55, ease: "easeIn" } },
  };
  const txtVar = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.05 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 600px at 10% 10%, rgba(255,255,255,.55), transparent 60%), radial-gradient(900px 520px at 90% 20%, rgba(255,255,255,.45), transparent 60%), linear-gradient(135deg, #66e0d6 0%, #2dc4b6 100%)",
      }}
    >
      <WavePattern />

      <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-white/35 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
        <div className="grid md:grid-cols-2 gap-10 items-center min-h-[520px]" onMouseEnter={stop} onMouseLeave={start}>
          {/* TEKS */}
          <div className="relative z-[2] text-white">
            <AnimatePresence mode="wait">
              <motion.div key={`txt-${slide.id}`} variants={txtVar} initial="initial" animate="animate" exit="exit">
                <p className="tracking-[0.25em] text-xs md:text-sm/relaxed text-white/80 mb-4">{slide.tag}</p>

                <h1 className="leading-[1] font-extrabold">
                  <span className="block text-[60px] md:text-[92px] drop-shadow-sm">{slide.title[0]}</span>
                  <span className="block text-[60px] md:text-[92px] drop-shadow-sm">{slide.title[1]}</span>
                </h1>

                <p className="mt-6 max-w-xl text-white/90">{slide.desc}</p>

                <div className="mt-8 flex items-center gap-5">
                  <a
                    href="/#products"
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white text-teal-700 font-semibold shadow hover:opacity-90"
                  >
                    Lihat Produk
                  </a>

                  {/* indikator */}
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="text-sm tracking-widest">
                      {String(index + 1).padStart(2, "0")}/{String(SLIDES.length).padStart(2, "0")}
                    </span>
                    <div className="flex gap-2">
                      {SLIDES.map((s, i) => (
                        <button
                          key={s.id}
                          aria-label={`slide ${i + 1}`}
                          onClick={() => {
                            stop();
                            setIndex(i);
                            start();
                          }}
                          className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* GAMBAR */}
          <div className="relative flex justify-center md:justify-center lg:justify-end">
            <button
              onClick={() => go(-1)}
              aria-label="prev"
              className="hidden md:grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur hover:bg-white text-teal-700"
            >
              ‹
            </button>

            <div className="relative w-[320px] md:w-[540px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`img-${slide.id}`}
                  variants={imgVar}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  src={slide.img || "/product.jpg"}
                  onError={(e) => (e.currentTarget.src = "/product.jpg")}
                  alt="Visual produk"
                  className="relative z-[1] w-full drop-shadow-2xl rounded-xl select-none pointer-events-none"
                  draggable={false}
                />
              </AnimatePresence>
              <div className="absolute -inset-10 -z-10 rounded-full bg-white/60 blur-3xl" />
            </div>

            <button
              onClick={() => go(1)}
              aria-label="next"
              className="hidden md:grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 backdrop-blur hover:bg-white text-teal-700"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
