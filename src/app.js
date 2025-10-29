// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB before defining routes (important)
await connectDB();

app.use("/api/users", userRoutes);

export default app;
