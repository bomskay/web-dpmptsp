const WelcomeSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50 text-gray-800 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-6 text-center">
        Visi dan Misi Kami
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <div>
          <h3 className="text-2xl font-bold mb-2">Visi</h3>
          <p className="text-xl">
            “Minahasa Maju Dalam Ekonomi Dan Budaya, Berdaulat, Adil, Dan Sejahtera”
          </p>
        </div>

        <div>
  <h3 className="text-2xl font-bold mb-4 text-center">Misi</h3>
  <ul className="list-decimal space-y-2 max-w-3xl mx-auto text-justify text-xl">
    <li>Memantapkan Manajemen Birokrasi Yang Profesional Melalui Tata Kelola Pemerintahan Yang Baik</li>
    <li>Meningkatkan Pembangunan Sumberdaya Manusia Yang Berbudaya Dan Berdaya Saing</li>
    <li>Mewujudkan Kemandirian Ekonomi Dengan Mendorong Sektor Pertanian, Perikanan Dan Pariwisata</li>
    <li>Mewujudkan Pengembangan Kewilayahan Dengan Prinsip Pembangunan Berkelanjutan</li>
    <li>Meningkatkan Pemerataan Kesejahteraan Masyarakat Yang Berkeadilan</li>
  </ul>
</div>


        <div>
          <h3 className="text-2xl font-bold mb-2">Motto</h3>
          <p className="text-xl">
            "Melayani Anda Kewajiban Kami, Kepuasan Anda Kebanggaan Kami"
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
