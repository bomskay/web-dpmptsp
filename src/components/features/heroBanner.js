const HeroBanner = () => {
  return (
    <section className="relative bg-blue-600 text-white h-[400px] flex items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Selamat Datang di Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Mewujudkan pelayanan publik yang transparan, profesional, dan terpercaya.
        </p>
      </div>
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-600/70"></div>
    </section>
  );
};

export default HeroBanner;
