import "./Footer.css";
function Footer({ onNewVideoClick }){

    return (
        <footer className="footer">
            <img src="../img/logo.png" alt="Logo"/>
            <div className="botones_">
                <button className="home" onClick={() => window.location.reload()}>HOME</button>
                <button className="new" onClick={onNewVideoClick}>
                    NUEVO VIDEO
                </button>
            </div>       
        </footer>
    );
}

export default Footer;