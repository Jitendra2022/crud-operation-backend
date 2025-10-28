import express from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);         // Get all users
router.get("/:id", getUserById);   // ✅ Get single user
router.post("/", createUser);      // Create new user
router.put("/:id", updateUser);    // Update user
router.delete("/:id", deleteUser); // Delete user

export default router;
