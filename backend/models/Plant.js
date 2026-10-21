const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    plant_name: { type: String, required: true },
    botanical_name: String,
    medicinal_uses: [String],
    ayush_system: String,
    description: String,
    image: String
});

module.exports = mongoose.model("Plant", plantSchema);