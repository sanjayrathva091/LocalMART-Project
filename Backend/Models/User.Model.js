const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phone: { type: Number, required: true },
    pincode: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isUser: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
