const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const sweetRoutes = require("./routes/sweetRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Debug log (IMPORTANT)
console.log("✅ app.js loaded");

// Health route
app.get("/", (req, res) => {
  res.send("Sweet Shop API is running...");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
