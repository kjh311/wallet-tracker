const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wallet", walletSchema);
