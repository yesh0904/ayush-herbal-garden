import { useEffect, useState } from "react";
import axios from "axios";
import PlantCard from "../components/PlantCard";

function Garden() {
    const [plants, setPlants] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/plants")
            .then(res => setPlants(res.data));
    }, []);

    const filtered = plants.filter(p =>
        p.plant_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">The <em>Herbal</em> Encyclopedia</h1>
            </div>

            <div className="filters-bar">
                <input
                    className="search-box"
                    placeholder="Search plants..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="plants-grid">
                {filtered.map(p => (
                    <PlantCard key={p._id} plant={p} />
                ))}
            </div>
        </div>
    );
}

export default Garden;