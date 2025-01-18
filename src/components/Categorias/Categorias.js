import "./Categorias.css";
import VideoCard from "../VideoCard/VideoCard";
import Formulario from "../Formulario/Formulario";
import { useState, useEffect } from "react";

function Categorias() {
    const [videos, setVideos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        fetch("https://bdl3g911-5000.use2.devtunnels.ms/videos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error al obtener los datos");
                }
                return response.json();
            })
            .then((data) => {
                setVideos(data);

                const uniqueCategories = data.reduce((acc, video) => {
                    const categoriaNormalizada = video.categoria.trim().toLowerCase();
                    if (!acc.some((cat) => cat.normalized === categoriaNormalizada)) {
                        acc.push({ original: video.categoria, normalized: categoriaNormalizada });
                    }
                    return acc;
                }, []);
                setCategorias(uniqueCategories.map((cat) => cat.original));
            })
            .catch((error) => {
                console.error("Error al cargar los datos:", error);
            });
    }, []);

    const handleDelete = (id) => {
        console.log(`Intentando eliminar el video con ID: ${id}`);
        console.log(`URL completa: https://bdl3g911-5000.use2.devtunnels.ms/videos?id=${id}`);

        fetch(`https://bdl3g911-5000.use2.devtunnels.ms/videos/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                console.log("Estado de la respuesta:", response.status);
                if (!response.ok) {
                    throw new Error(`Error al eliminar el video con ID: ${id}, Estado: ${response.status}`);
                }
                console.log(`Video con ID ${id} eliminado exitosamente del servidor`);
                // Actualizar el estado local después de un DELETE exitoso
                setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
            })
            .catch((error) => {
                console.error("Error al eliminar el video del servidor:", error);
            });
    };

    const handleEdit = (video) => {
        setCurrentVideo(video);
        setIsEditing(true);
    };

    const handleSave = (updatedVideo) => {
        setVideos((prevVideos) =>
            prevVideos.map((video) =>
                video.id === updatedVideo.id ? updatedVideo : video
            )
        );
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div className="categorias-container">
            {categorias.map((categoria) => (
                <div key={categoria} className="categoria-section">
                    <div className="categoria-label" style={{ backgroundColor: getCategoriaColor(categoria) }}>
                        {categoria.toUpperCase()}
                    </div>
                    <div className="video-list">
                        {videos
                            .filter((video) => video.categoria === categoria)
                            .map((video) => (
                                <VideoCard
                                    key={video.id}
                                    categoria={video.categoria}
                                    link={video.link}
                                    titulo={video.titulo}
                                    descripcion={video.descripcion}
                                    imagen={video.imagen}
                                    onEdit={() => handleEdit(video)}
                                    onDelete={() => handleDelete(video.id)} 
                                />
                            ))}
                    </div>
                </div>
            ))}

            {isEditing && (
                <div className="modal">
                    <div className="modal-content">
                        <Formulario
                            onSubmit={handleSave}
                            onClear={handleCancel}
                            initialValues={currentVideo}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

function getCategoriaColor(categoria) {
    const colores = {
        "Front End": "#00b4d8",
        "Back End": "#00ff54",
        "Innovación y Gestión": "#ffd700",
    };
    return colores[categoria] || "#ccc";
}

export default Categorias;
