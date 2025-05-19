    "use client";

    import { useEffect, useState } from "react";
    import { supabase } from "../../../supabase";

    const DeleteImage = ({ refreshTrigger, onDeleteSuccess }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const fetchImages = async () => {
        setLoading(true);
        const { data, error } = await supabase.storage
        .from("image-bucket")
        .list("images", { limit: 100, offset: 0 });

        if (error) {
        console.error("Gagal mengambil gambar:", error.message);
        setMessage("Gagal memuat gambar");
        setLoading(false);
        return;
        }

        const urls = data.map((file) => {
        const { data: publicUrl } = supabase.storage
            .from("image-bucket")
            .getPublicUrl(`images/${file.name}`);
        return { name: file.name, url: publicUrl.publicUrl };
        });

        setImages(urls);
        setLoading(false);
        setMessage("");
    };

    useEffect(() => {
        fetchImages();
    }, [refreshTrigger]);

    const handleDelete = async (fileName) => {
        const { error } = await supabase.storage
        .from("image-bucket")
        .remove([`images/${fileName}`]);

        if (error) {
        console.error("Gagal menghapus gambar:", error.message);
        setMessage("Gagal menghapus gambar.");
        return;
        }

        setMessage("Gambar berhasil dihapus.");
        if (onDeleteSuccess) onDeleteSuccess();
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded shadow-lg mt-10">
        <h3 className="text-xl font-semibold mb-4">Hapus Gambar</h3>
        {loading ? (
            <p>Memuat gambar...</p>
        ) : images.length === 0 ? (
            <p>Tidak ada gambar yang ditemukan.</p>
        ) : (
            <ul className="space-y-4">
            {images.map((img, idx) => (
                <li key={idx} className="flex items-center justify-between">
                <img src={img.url} alt="preview" className="w-16 h-16 object-cover rounded" />
                <button
                    onClick={() => handleDelete(img.name)}
                    className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                    Hapus
                </button>
                </li>
            ))}
            </ul>
        )}
        {message && <p className="mt-4 text-sm text-center">{message}</p>}
        </div>
    );
    };

    export default DeleteImage;
