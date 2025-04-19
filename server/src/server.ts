import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/routes";
import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";
import weightRoutes from "./routes/routes";
import exerciseRoutes from "./routes/routes";
import routineRoutes from "./routes/routes";
import path from "path";

const app = express();

// Configure CORS to allow requests from your frontend
app.use(
  cors({
    origin: ["http://localhost:5173", "http://192.168.1.*:5173"], // Add your frontend URL
    credentials: true,
  })
);

app.use(express.json());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  morgan("combined", {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/weight", weightRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api/routines", routineRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    logger.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
  }
);

const PORT = parseInt(process.env.PORT || "5000", 10);

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`Server is running on port ${PORT}`);
});
