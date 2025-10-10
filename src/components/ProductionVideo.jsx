export default function ProductionVideo() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center" data-aos="fade-up">
            Bagaimana Produk Kami Dibuat
          </h2>
          <p className="text-center text-slate-600 mt-3 mb-10" data-aos="fade-up" data-aos-delay="100">
            Dari bahan baku pilihan hingga ke tangan Anda.
          </p>
          <div
            className="aspect-video w-full rounded-2xl shadow overflow-hidden bg-slate-100"
            data-aos="zoom-in"
            data-aos-delay="150"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Produksi"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
  