import "./Header.css";

function Header({ onNewVideoClick }) {
    return (
        <header className="header">
            <img src="img/logo.png" alt="logo" className="img" />
            <div className="botones">
                <button className="home" onClick={() => window.location.reload()}>HOME</button>
                <button className="new" onClick={onNewVideoClick}>
                    NUEVO VIDEO
                </button>
            </div>
        </header>
    );
}

export default Header;
