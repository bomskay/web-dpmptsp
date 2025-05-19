const HeroBanner = () => {
  return (
    <section
      className="relative text-white h-[400px] flex items-center justify-center px-6 md:px-12 bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/banner.jpeg')", // Pastikan gambar ada di public/images
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-600/70 z-0" />

      {/* Konten */}
      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
          Selamat Datang di Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Mewujudkan pelayanan publik yang transparan, profesional, dan terpercaya.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
