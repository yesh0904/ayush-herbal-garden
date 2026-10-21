import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PlantDetails() {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/plants/${id}`)
            .then(res => setPlant(res.data));
    }, [id]);

    if (!plant) return <p>Loading...</p>;

    return (
        <div style={{ padding: 30 }}>
            <h1>{plant.plant_name}</h1>
            <h3><i>{plant.botanical_name}</i></h3>
            <p><b>System:</b> {plant.ayush_system}</p>
            <p><b>Uses:</b> {plant.medicinal_uses.join(", ")}</p>
            <p>{plant.description}</p>
        </div>
    );
}

export default PlantDetails;