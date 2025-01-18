import "./NewVideoForm.css";
import { useState } from "react";

function NewVideoForm({ onAddVideo }) {
    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "",
        imagen: "",
        link: "",
        descripcion: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const generateId = () => {
        return crypto.randomUUID();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            id: generateId(), 
            ...formData,
        };

        fetch("http://localhost:5000/videos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newVideo),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al agregar el video");
                }
                return response.json();
            })
            .then(() => {
                window.location.reload();
            })
            .catch((error) => console.error("Error al agregar el video:", error));
    };

    return (
        <form className="new-video-form" onSubmit={handleSubmit}>
            <h2 className="form-section-title">Crear Tarjeta</h2>

            <div className="form-group">
                <label htmlFor="titulo">Título</label>
                <input
                    type="text"
                    id="titulo"
                    value={formData.titulo}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="categoria">Categoría</label>
                <select
                    id="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    required
                >
                    <option value="">Seleccione una categoría</option>
                    <option value="Front End">Front End</option>
                    <option value="Back End">Back End</option>
                    <option value="Innovación y Gestión">Innovación y Gestión</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="imagen">Imagen</label>
                <input
                    type="text"
                    id="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="link">Video</label>
                <input
                    type="text"
                    id="link"
                    value={formData.link}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    id="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="form-buttons">
                <button type="submit" className="btn-submit">
                    GUARDAR
                </button>
            </div>
        </form>
    );
}

export default NewVideoForm;
