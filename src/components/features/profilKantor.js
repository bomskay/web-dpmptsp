const ProfilKantor = () => {
  const strukturOrganisasi = [
    { nama: "Dr. Andi Sutrisno", jabatan: "Kepala Biro" },
    { nama: "Sari Mulyani", jabatan: "Sekretaris" },
    { nama: "Budi Santoso", jabatan: "Kepala Bidang Pemerintahan" },
    { nama: "Dewi Larasati", jabatan: "Kepala Bidang Otonomi Daerah" },
    { nama: "Rizky Pratama", jabatan: "Staf Administrasi" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 text-gray-800">
      <h2 className="text-3xl font-semibold mb-8 text-center">Profil Kantor</h2>

      {/* Sejarah Singkat */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">Sejarah Singkat</h3>
        <p className="text-justify leading-relaxed">
          Biro Pemerintahan dan Otonomi Daerah didirikan pada tahun 1990 sebagai
          bagian dari upaya pemerintah untuk meningkatkan koordinasi dan pelayanan
          di bidang pemerintahan lokal. Seiring waktu, biro ini terus berkembang dan
          berperan penting dalam memperkuat otonomi daerah serta mendukung pembangunan
          daerah di Sulawesi Utara.
        </p>
      </div>

      {/* Struktur Organisasi */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-3">Struktur Organisasi</h3>
        <ul className="list-disc list-inside max-w-md mx-auto space-y-2">
          {strukturOrganisasi.map(({ nama, jabatan }, idx) => (
            <li key={idx} className="font-medium">
              <span className="text-gray-900">{nama}</span> — <span className="italic">{jabatan}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tugas dan Fungsi */}
      <div>
        <h3 className="text-2xl font-semibold mb-3">Tugas dan Fungsi</h3>
        <ul className="list-disc list-inside max-w-3xl mx-auto space-y-2 text-justify leading-relaxed">
          <li>Menyusun kebijakan di bidang pemerintahan dan otonomi daerah.</li>
          <li>Melaksanakan koordinasi antara pemerintah pusat dan daerah.</li>
          <li>Mendukung pelaksanaan program pembangunan daerah secara efektif dan efisien.</li>
          <li>Memberikan pelayanan administrasi yang transparan dan akuntabel.</li>
          <li>Melakukan evaluasi dan pengawasan pelaksanaan otonomi daerah.</li>
        </ul>
      </div>
    </section>
  );
};

export default ProfilKantor;
