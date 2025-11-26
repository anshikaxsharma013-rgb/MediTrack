// server/server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";   // ⭐ YOU FORGOT THIS IMPORT
import medicineRoutes from "./routes/medicineRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// CORS (Render-friendly)
app.use(
  cors({
    origin: "*", // change later to your frontend URL
  })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req, res) => {
  res.send("MediTrack API is running ✅");
});

// ⭐ API ROUTES
app.use("/api/medicines", medicineRoutes);
app.use("/api/users", userRoutes);

// Start server ONLY after DB connects
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
});
