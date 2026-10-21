const express = require("express");
const router = express.Router();
const Plant = require("../models/Plant");

// GET all plants
router.get("/", async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET single plant
router.get("/:id", async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST plant
router.post("/", async (req, res) => {
    try {
        const newPlant = new Plant(req.body);
        const saved = await newPlant.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE all plants
router.delete("/", async (req, res) => {
    try {
        await Plant.deleteMany();
        res.json({ message: "All plants deleted" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;