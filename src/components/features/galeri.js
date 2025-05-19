"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../supabase";

const GallerySection = ({ refreshTrigger }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);

      const { data, error } = await supabase.storage
        .from("image-bucket")
        .list("images", { limit: 100, offset: 0 });

      if (error) {
        console.error("Gagal mengambil gambar:", error.message);
        setLoading(false);
        return;
      }

      const urls = data
        .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp)$/i))
        .map((file) => {
          const { data: publicUrlData } = supabase.storage
            .from("image-bucket")
            .getPublicUrl(`images/${file.name}`);
          return publicUrlData.publicUrl;
        });

      setImages(urls);
      setLoading(false);
    };

    fetchImages();
  }, [refreshTrigger]);  // <-- refresh ketika refreshTrigger berubah

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Galeri Kegiatan</h2>
      {loading ? (
        <p className="text-center">Memuat gambar...</p>
      ) : (
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
      )}
    </section>
  );
};

export default GallerySection;
