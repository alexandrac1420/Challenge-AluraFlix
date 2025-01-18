import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import MainContainer from './components/MainContainer/MainContainer';
import NewVideoForm from './components/NewVideoForm/NewVideoForm';
import './components/NewVideoForm/Modal.css';
import { useState, useEffect } from 'react';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [videos, setVideos] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:5000/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data))
            .catch((error) => console.error("Error al cargar los videos:", error));
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddVideo = (newVideo) => {
        setVideos((prevVideos) => [...prevVideos, newVideo]);

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
            .then((createdVideo) => {
                setVideos((prevVideos) =>
                    prevVideos.map((video) =>
                        video.id === newVideo.id ? createdVideo : video
                    )
                );
            })
            .catch((error) => console.error("Error al agregar el video:", error));

        setIsModalOpen(false); 
    };

    return (
        <div>
            <Header className="header" onNewVideoClick={handleOpenModal} />
            <Banner />
            <MainContainer videos={videos} />
            <Footer onNewVideoClick={handleOpenModal}/>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-modal" onClick={handleCloseModal}>
                            X
                        </button>
                        <NewVideoForm onAddVideo={handleAddVideo} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
