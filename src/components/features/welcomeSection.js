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
    <li>Meningkatkan Pembangunan SDM Minahasa Yang Sehat, Cerdas, Berbudaya dan Berdaya Saing;</li>
    <li>Meningkatkan Pembangunan Infrastruktur Berwawasan Lingkungan Untuk Mewujudkan Ekonomi Yang Tangguh;</li>
    <li>Menetapkan Tata Kelola Pemerintahan Yang Akuntbel Berbasis Digitalisasi dan Inovatif Untuk Mewujudkan Pelayanan Publik Yang Prima</li>
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
