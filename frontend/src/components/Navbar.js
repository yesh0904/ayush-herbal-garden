import { useNavigate } from "react-router-dom";

function Navbar() {
    const nav = useNavigate();

    return (
        <nav>
            <div className="nav-logo" onClick={() => nav("/")}>
                🌿 <span>Vanaspati</span>
            </div>

            <div className="nav-links">
                <button className="nav-btn" onClick={() => nav("/")}>Home</button>
                <button className="nav-btn" onClick={() => nav("/garden")}>Garden</button>
                <button className="nav-btn" onClick={() => nav("/chatbot")}>AI Guru</button>
                <button className="nav-btn" onClick={() => nav("/quiz")}>Quiz</button>
            </div>
        </nav>
    );
}

export default Navbar;