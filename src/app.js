// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());


// Connect DB before defining routes (important)
connectDB()
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));
app.use(express.json());

app.use("/api/users", userRoutes);
// Root route
app.get('/', (req, res) => {
  res.send('🚀 API is running...');
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


export default app;
