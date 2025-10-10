function WavePattern() {
    return (
      <svg
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        aria-hidden="true"
      >
        <defs>
          <pattern id="lines2" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 Q40 0 80 40 T160 40" fill="none" stroke="white" strokeWidth="1.2"/>
            <path d="M0 80 Q40 40 80 80 T160 80" fill="none" stroke="white" strokeWidth="1.2"/>
          </pattern>
        </defs>
        <rect width="1440" height="900" fill="url(#lines2)" />
      </svg>
    );
  }
  
  export default function AboutHero() {
    return (
      <section
        id="about"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #59d3db 0%, #46d2c0 60%, #43cbb6 100%)" }}
      >
        <WavePattern />
  
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white" data-aos="fade-right">
              <h1 className="text-[48px] md:text-[64px] leading-[1.05] font-extrabold drop-shadow-sm">
                Tentang<br />Kami
              </h1>
              <p className="mt-6 text-white/95 text-lg max-w-xl">
                Sejak 1967 menghadirkan kebersihan untuk keluarga Indonesia.
              </p>
              <a
                href="#history"
                className="mt-10 inline-grid place-items-center w-11 h-11 rounded-full bg-black/15 text-white text-2xl hover:bg-black/25 transition"
                aria-label="Scroll to history"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                ⌄
              </a>
            </div>
  
            <div className="relative flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="120">
              <img
                src="pabrik.jpg"
                alt="Pabrik"
                className="w-[360px] md:w-[520px] rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  