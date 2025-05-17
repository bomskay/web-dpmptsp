"use client";

import { useState } from "react";
import { supabase } from "../../../supabase";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Pilih file terlebih dahulu.");
      return;
    }

    setUploading(true);
    setMessage("");

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("public") // nama bucket di Supabase Storage
      .upload(filePath, file);

    if (uploadError) {
      setMessage(`Upload gagal: ${uploadError.message}`);
      setUploading(false);
      return;
    }

    // Dapatkan public URL file
    const { data } = supabase.storage.from("public").getPublicUrl(filePath);

    setMessage(`Upload berhasil! File URL: ${data.publicUrl}`);
    setUploading(false);
    setFile(null);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow-lg mt-10">
      <h3 className="text-xl font-semibold mb-4">Upload Gambar Galeri/Berita</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default UploadImage;
