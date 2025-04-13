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

app.use(cors());
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
