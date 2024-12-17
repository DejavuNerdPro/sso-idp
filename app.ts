import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import validateRoutes from "./routes/validate";
import { errorHandler } from "./middlewares/errorhandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Routes
app.use("/auth", authRoutes);
app.use("/validate", validateRoutes);

//Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Identity Provider running on http://localhost:${PORT}`);
});
