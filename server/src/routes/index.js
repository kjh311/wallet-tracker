const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Wallet = require("./models/Wallet");
const fetch = require("node-fetch");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error("MONGODB_URI is not defined in your environment variables");
}

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// GET wallets
app.get("/api/wallets", async (req, res) => {
  try {
    const wallets = await Wallet.find();
    res.status(200).json(wallets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch wallets" });
  }
});

// POST wallet
app.post("/api/wallets", async (req, res) => {
  const { address, userId } = req.body;

  try {
    const newWallet = new Wallet({ address, userId });
    await newWallet.save();
    res.status(201).json({ message: "Wallet saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save wallet" });
  }
});

// DELETE wallet
app.delete("/api/wallets/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedWallet = await Wallet.findByIdAndDelete(id);
    if (!deletedWallet) {
      res.status(404).json({ error: "Wallet not found" });
      return;
    }
    res.status(200).json({ message: "Wallet deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete wallet" });
  }
});

app.get("/", (req, res) => {
  res.send("API is running");
});

// GET: Check wallet for scams using Chainabuse API
app.get("/api/check-wallet/:address", async (req, res) => {
  const { address } = req.params;

  try {
    const response = await fetch(
      `https://api.chainabuse.com/api/v1/reports?address=${address}`,
      {
        headers: {
          "X-API-KEY": process.env.CHAINABUSE_API_KEY,
          accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Chainabuse error:", errorText);
      return res
        .status(500)
        .json({ error: "Failed to fetch data from Chainabuse" });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error checking wallet:", error);
    res
      .status(500)
      .json({ error: "An error occurred while checking the wallet" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
