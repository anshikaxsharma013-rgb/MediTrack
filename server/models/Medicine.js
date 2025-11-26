import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    dosage: {
      type: String,
      required: true,
      trim: true // e.g. "500 mg"
    },
    time: {
      type: String,
      required: true,
      trim: true // "08:00"
    },
    date: {
      type: String,
      required: true, // store as "YYYY-MM-DD"
      trim: true
    },
    notes: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      enum: ["pending", "taken", "missed"],
      default: "pending"
    }
    // optional: userId if you later add auth
    // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

export const Medicine = mongoose.model("Medicine", medicineSchema);
