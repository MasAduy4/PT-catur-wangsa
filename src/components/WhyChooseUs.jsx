export default function WhyChooseUs() {
    const items = [
      { icon: "⏰", title: "Sejak 1967", desc: "Lebih dari 50 tahun pengalaman dalam industri sabun & deterjen." },
      { icon: "⚙️", title: "Teknologi Modern", desc: "Fasilitas produksi terkini untuk menjaga kualitas." },
      { icon: "🧴", title: "Produk Serbaguna", desc: "Cocok untuk rumah tangga, laundry, hingga industri." },
      { icon: "✅", title: "Kualitas Terjamin", desc: "Terpercaya, aman, dan efektif mengangkat noda membandel." },
    ];
  
    return (
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="fade-up">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="100">
            Kami selalu berkomitmen memberikan produk terbaik bagi konsumen kami.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  