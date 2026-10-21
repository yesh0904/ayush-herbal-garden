import { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "../components/PlantCard";
import { useNavigate } from "react-router-dom";

function Home() {
    const [plants, setPlants] = useState([]);
    const [filteredPlants, setFilteredPlants] = useState([]);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/plants")
            .then(res => {
                setPlants(res.data);
                setFilteredPlants(res.data);
            });
    }, []);

    const handleSearch = (value) => {
        setSearch(value);

        const filtered = plants.filter(p =>
            p.plant_name.toLowerCase().includes(value.toLowerCase())
        );

        setFilteredPlants(filtered);
    };

    return (
        <div>

            {/* 🌿 HERO (EXACT MATCH) */}
            <div className="hero">
                <div className="hero-eyebrow">
                    AYUSH Medicinal Knowledge Platform
                </div>

                <h1 className="hero-title">
                    The <em>Virtual</em><br />Herbal Garden
                </h1>

                <div className="hero-subtitle">
                    Rooted in Ancient Wisdom, Grown for Modern Minds
                </div>

                <p className="hero-desc">
                    Explore 90+ sacred medicinal plants from India's AYUSH traditions —
                    Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy —
                    through an immersive, AI-powered learning experience.
                </p>

                <div className="hero-cta">
                    <button className="btn-primary" onClick={() => navigate("/garden")}>
                        🌱 Explore the Garden
                    </button>

                    <button className="btn-outline" onClick={() => navigate("/chatbot")}>
                        ✨ Ask the AI Guru
                    </button>
                </div>

                {/* 📊 STATS (EXACT UI) */}
                <div className="stats-row">
                    <div className="stat">
                        <div className="stat-num">{plants.length || "90+"}</div>
                        <div className="stat-label">Medicinal Plants</div>
                    </div>

                    <div className="stat">
                        <div className="stat-num">5</div>
                        <div className="stat-label">AYUSH Systems</div>
                    </div>

                    <div className="stat">
                        <div className="stat-num">6</div>
                        <div className="stat-label">Themed Tours</div>
                    </div>

                    <div className="stat">
                        <div className="stat-num">200+</div>
                        <div className="stat-label">Quiz Questions</div>
                    </div>
                </div>
            </div>

            {/* 🌟 FEATURES GRID (EXACT MATCH) */}
            <div className="features-grid">

                <div className="feature-card" onClick={() => navigate("/garden")}>
                    <div className="feature-icon">🌿</div>
                    <div className="feature-title">Herbal Encyclopedia</div>
                    <div className="feature-desc">
                        Browse medicinal plants with detailed profiles.
                    </div>
                </div>

                <div className="feature-card" onClick={() => navigate("/chatbot")}>
                    <div className="feature-icon">🤖</div>
                    <div className="feature-title">AI Herbal Guru</div>
                    <div className="feature-desc">
                        Ask anything about herbs and remedies.
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🔍</div>
                    <div className="feature-title">Disease Identifier</div>
                    <div className="feature-desc">
                        Upload plant images and detect diseases.
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🗺️</div>
                    <div className="feature-title">Virtual Tours</div>
                    <div className="feature-desc">
                        Explore themed herbal journeys.
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🧠</div>
                    <div className="feature-title">Quiz</div>
                    <div className="feature-desc">
                        Test your herbal knowledge.
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">📚</div>
                    <div className="feature-title">My Garden</div>
                    <div className="feature-desc">
                        Save and manage your plants.
                    </div>
                </div>

            </div>

            {/* 🔍 SEARCH SECTION */}
            <div style={{ padding: "20px", textAlign: "center" }}>
                <input
                    className="search-box"
                    value={search}
                    placeholder="Search plants..."
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>

            {/* 🌱 PLANT GRID */}
            <div className="plants-grid">
                {filteredPlants.length > 0 ? (
                    filteredPlants.map(p => (
                        <PlantCard key={p._id} plant={p} />
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>No plants found 🌿</p>
                )}
            </div>

        </div>
    );
}

export default Home;