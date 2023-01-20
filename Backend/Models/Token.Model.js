const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
    unique: true,
  },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now(), expires: 3600 },
});

const TokenModel = mongoose.model("token", tokenSchema);

module.exports = {
  TokenModel,
};
