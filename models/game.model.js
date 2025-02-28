import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    year: { type: Number, required: true },
    review: { type: Number, required: true },
    detail: { type: String, required: true },
    price: { type: Number, required: true },
    platform: { type: [String], required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Game = mongoose.model("games", gameSchema);

export default Game;
