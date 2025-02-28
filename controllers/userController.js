import bcrypt from "bcryptjs";
import Gameuser from "../models/gameuser.model.js";
import asyncHandler from "../middleware/asyncHandler.js";
import createToken from "../utlis/createToken.js";

const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find the admin in the database
  const admin = await Gameuser.findOne({ email });

  if (!admin || !admin.isAdmin) {
    return res.status(403).json({ message: "Access Denied: Only the admin can log in" });
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(password, admin.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  // Generate JWT token
  createToken(res, admin._id);

  res.status(200).json({
    _id: admin._id,
    username: admin.username,
    email: admin.email,
    isAdmin: admin.isAdmin,
  });
});






export { loginAdmin  };
