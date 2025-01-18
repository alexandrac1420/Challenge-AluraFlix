import { useState } from "react";
import axios from "axios";
import "./AddVideo.css";

function AddVideo({ onVideoAdded }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newVideo = { title, category, imageUrl };

        axios.post("http://localhost:5000/videos", newVideo)
            .then((response) => {
                onVideoAdded(response.data);
                setTitle("");
                setCategory("");
                setImageUrl("");
            })
            .catch((error) => {
                console.error("Error al agregar el video:", error);
            });
    };

    return (
        <form className="add-video-form" onSubmit={handleSubmit}>
            <h2>Nuevo Video</h2>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default AddVideo;
