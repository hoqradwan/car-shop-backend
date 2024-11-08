import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  size: { type: Number, required: true },
});
export const User = new mongoose.model("User", userSchema);
