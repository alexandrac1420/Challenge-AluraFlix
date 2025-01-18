import "./Banner.css";

function Banner() {
    return (
        <div className="banner">
            <img src="../img/banner.png" alt="Banner" className="banner-image" />

            <div className="banner-content">
                <div className="titulos">
                    <div className="banner-category">FRONT END</div>
                    <h2 className="banner-title">Challenge React</h2>
                    <p className="banner-description">
                        Entendiendo los fundamentos de programación y desarrollo web con la construcción de un sistema de arquitectura modular para poder integrar todas las funcionalidades necesarias de forma eficiente.
                    </p>
                </div>
                <div className="banner-video">
                    <iframe
                        src="https://www.youtube.com/embed/PwheldW6V98?si=mJKUmresNkF_c4Q1"
                        title="Banner Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Banner;
