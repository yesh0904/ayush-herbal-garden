function PlantCard({ plant }) {
    return (
        <div className="plant-card">
            <div className="plant-emoji-bg">
                🌿
                <div className="plant-system-badge badge-ayurveda">
                    {plant.ayush_system}
                </div>
            </div>

            <div className="plant-info">
                <div className="plant-name">{plant.plant_name}</div>
                <div className="plant-scientific">{plant.botanical_name}</div>

                <div className="plant-tags">
                    {plant.medicinal_uses.map((u, i) => (
                        <span key={i} className="plant-tag">{u}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlantCard;