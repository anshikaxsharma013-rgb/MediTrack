import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

// GET all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET one user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// POST create a user
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email
  });

  const saved = await user.save();
  res.json(saved);
});

export default router;
