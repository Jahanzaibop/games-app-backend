import { Router } from "express";
import Gameuser from "../models/gameuser.model.js";
import bcrypt from "bcryptjs";

const router = Router();

// TEMPORARY route — REMOVE after creating admin
router.post("/create-admin-once", async (req, res) => {
  try {
    const existing = await Gameuser.findOne({ email: "admin@example.com" });
    if (existing) return res.status(400).json({ message: "Admin already exists" });

    const hashedPassword = await bcrypt.hash("securePassword123", 10);

    const admin = await Gameuser.create({
      username: "admin",
      email: "admin@example.com",
      password: hashedPassword,
      isAdmin: true,
    });

    res.status(201).json({ message: "Admin created", admin });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
