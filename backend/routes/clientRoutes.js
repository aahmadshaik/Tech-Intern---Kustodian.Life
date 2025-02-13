const express = require("express");
const { Client } = require("../models/Client");

const router = express.Router();

// Fetch all clients
router.get("/clients", async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
