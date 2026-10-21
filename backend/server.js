const express = require("express");
const cors = require("cors");
const connectDB = require("./db");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/plants", require("./routes/plantRoutes"));

// Root API
app.get("/", (req, res) => {
    res.send("🌿 AYUSH Herbal Garden API Running");
});

// Start server
app.listen(3001, () => {
    console.log("🚀 Server running on http://localhost:3001");
});