"use client";

const GallerySection = () => {
  // Contoh array gambar. Ganti URL dengan gambar dari Supabase Storage atau lokal/public
  const images = [
    "/image/galeri1.jpeg",
    "/image/galeri2.jpeg",
    "/image/galeri3.jpeg",
    "/image/galeri4.jpeg",
    "/image/galeri5.jpeg",
    
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Galeri Kegiatan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl shadow-md group">
            <img
              src={src}
              alt={`Galeri ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
