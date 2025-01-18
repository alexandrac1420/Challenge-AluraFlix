import React, { useState } from "react";
import "./Formulario.css";

function Formulario({ onSubmit, onClear, initialValues }) {
    const [formData, setFormData] = useState(initialValues || {
        titulo: "",
        categoria: "",
        imagen: "",
        video: "",
        descripcion: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, id: initialValues.id }); 
    };

    return (
        <form onSubmit={handleSubmit} className="formulario">
            <label htmlFor="titulo">Título</label>
            <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
            />

            <label htmlFor="categoria">Categoría</label>
            <select
                id="categoria"
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
            >
                <option value="">Selecciona una categoría</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Innovación y Gestión">Innovación y Gestión</option>
            </select>

            <label htmlFor="imagen">Imagen</label>
            <input
                type="url"
                id="imagen"
                name="imagen"
                value={formData.imagen}
                onChange={handleChange}
            />

            <label htmlFor="video">Video</label>
            <input
                type="url"
                id="video"
                name="video"
                value={formData.video}
                onChange={handleChange}
            />

            <label htmlFor="descripcion">Descripción</label>
            <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
            ></textarea>

            <button type="submit">GUARDAR</button>
            <button type="button" onClick={onClear}>CANCELAR</button>
        </form>
    );
}

export default Formulario;
