import "./VideoCard.css";

function VideoCard({ categoria, link, titulo, descripcion, imagen, onEdit, onDelete }) {
    return (
        <div className="video-card">
            <iframe
                className="video-card-video"
                src={link}
                title={`Video de ${categoria}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>

            <div className="video-card-content">
                <div className="video-card-buttons">
                    <button className="delete-btn" onClick={onDelete}>BORRAR</button>
                    <button className="edit-btn" onClick={onEdit}>EDITAR</button>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
