const WelcomeSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50 text-gray-800 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Visi dan Misi Kami
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 text-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Visi</h3>
          <p>
            Menjadi biro pemerintahan yang inovatif dan responsif dalam
            pelayanan kepada masyarakat.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Misi</h3>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li>Meningkatkan kualitas pelayanan publik secara berkelanjutan.</li>
            <li>Memperkuat transparansi dan akuntabilitas biro.</li>
            <li>Mendorong partisipasi aktif masyarakat dalam pengambilan keputusan.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2">Highlight Berita & Event Terbaru</h3>
          <p>
            - Workshop Penguatan Tata Kelola Pemerintahan (20 Mei 2025) <br />
            - Peluncuran Aplikasi Layanan Digital (1 Juni 2025)
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
