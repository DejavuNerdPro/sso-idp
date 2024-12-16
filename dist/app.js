"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
// import authRoutes from "./routes/auth";
// import validateRoutes from "./routes/validate";
// import { errorHandler } from "./middleware/errorHandler";
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Routes
// app.use("/auth", authRoutes);
// app.use("/validate", validateRoutes);
// Error handling middleware
// app.use(errorHandler);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Identity Provider running on http://localhost:${PORT}`);
});
