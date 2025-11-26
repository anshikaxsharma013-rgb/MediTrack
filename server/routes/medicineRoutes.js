// server/routes/medicineRoutes.js
import express from "express";
import { Medicine } from "../models/Medicine.js";
import { validateMedicine } from "../middleware/validateMedicine.js";

const router = express.Router();

/**
 * GET /api/medicines
 * Get all medicines
 */
router.get("/", async (req, res) => {
  try {
    const medicines = await Medicine.find().sort({ createdAt: -1 });
    res.json(medicines);
  } catch (err) {
    console.log("Error fetching medicines:", err.message);
    res.status(500).json({ message: "Server error fetching medicines" });
  }
});

/**
 * GET /api/medicines/:id
 * Get single medicine by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    if (!medicine) {
      return res.status(404).json({ message: "Medicine not found" });
    }
    res.json(medicine);
  } catch (err) {
    console.log("Error fetching medicine:", err.message);
    res.status(500).json({ message: "Server error fetching medicine" });
  }
});

/**
 * POST /api/medicines
 * Create a new medicine (with simple validation)
 */
router.post("/", validateMedicine, async (req, res) => {
  try {
    const medicine = new Medicine(req.body);
    const saved = await medicine.save();
    res.status(201).json(saved);
  } catch (err) {
    console.log("Error creating medicine:", err.message);
    res.status(500).json({ message: "Server error creating medicine" });
  }
});


/**
 * PUT /api/medicines/:id
 * Update a medicine
 */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated doc
    );

    if (!updated) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.json(updated);
  } catch (err) {
    console.log("Error updating medicine:", err.message);
    res.status(500).json({ message: "Server error updating medicine" });
  }
});

/**
 * DELETE /api/medicines/:id
 * Delete a medicine
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Medicine.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Medicine not found" });
    }

    res.json({ message: "Medicine deleted" });
  } catch (err) {
    console.log("Error deleting medicine:", err.message);
    res.status(500).json({ message: "Server error deleting medicine" });
  }
});

export default router;
