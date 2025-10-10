function Card({ title, desc, icon, delay = 0 }) {
    return (
      <div
        className="bg-slate-100/80 rounded-2xl p-8 text-center shadow-sm"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <div className="text-teal-700 text-4xl mb-3">{icon}</div>
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-700 mt-3 leading-relaxed">{desc}</p>
      </div>
    );
  }
  
  export default function VisionMission() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center" data-aos="fade-up">
            Visi &amp; Misi
          </h2>
  
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            {/* Cards kiri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card
                title="Visi"
                icon="🎯"
                desc="Menjadi produsen sabun dan deterjen terpercaya di Indonesia"
                delay={100}
              />
              <Card
                title="Misi"
                icon="🤝"
                desc="Menghadirkan produk berkualitas, ramah lingkungan, dan terjangkau"
                delay={200}
              />
            </div>
  
            {/* Gambar kanan */}
            <div className="rounded-3xl overflow-hidden shadow-2xl" data-aos="fade-left" data-aos-delay="150">
              <img src="gedung.png" alt="Gedung" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    );
  }
  