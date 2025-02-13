const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const clientRoutes = require("./routes/clientRoutes");
const { insertDefaultData } = require("./models/Client");

const app = express();

// Middleware
app.use(cors());

// Database connection
connectDB();

// Insert default data
insertDefaultData();

// Routes
app.use("/api", clientRoutes);

module.exports = app;
