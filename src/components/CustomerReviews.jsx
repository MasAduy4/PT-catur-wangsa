const REVIEWS = [
    { id: 1, name: "Acell", text: "Suka banget sama sabun ini. Wanginya khas dan efektif ngilangin noda membandel.", avatar: "https://i.pravatar.cc/100?img=1" },
    { id: 2, name: "Acell", text: "Kualitas konsisten dan harganya masuk akal. Recommended!", avatar: "https://i.pravatar.cc/100?img=2" },
    { id: 3, name: "Acell", text: "Busa banyak, bersih maksimal. Repeat order.", avatar: "https://i.pravatar.cc/100?img=3" },
  ];
  
  export default function CustomerReviews() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center" data-aos="fade-up">
            Ulasan Pelanggan
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {REVIEWS.map((r, i) => (
              <div
                key={r.id}
                className="bg-white border rounded-2xl p-6 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="flex items-center gap-3">
                  <img src={r.avatar} alt={r.name} className="h-12 w-12 rounded-full" />
                  <div>
                    <p className="font-semibold">{r.name}</p>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                </div>
                <p className="text-slate-600 mt-3">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  