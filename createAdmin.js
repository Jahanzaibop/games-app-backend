import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Gameuser from "./models/gameuser.model.js";

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

const createAdmin = async () => {
  await connectDB();

  const adminEmail = "raza12@example.com";
  const adminPassword = "raza123";

  const existingAdmin = await Gameuser.findOne({ email: adminEmail });

  if (existingAdmin) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  const admin = new Gameuser({
    username: "admin",
    email: adminEmail,
    password: hashedPassword,
    isAdmin: true,
  });

  try {
    await admin.save();
    console.log("Admin user created successfully");
    process.exit();
  } catch (error) {
    console.error("Failed to create admin:", error);
    process.exit(1);
  }
};

createAdmin();
