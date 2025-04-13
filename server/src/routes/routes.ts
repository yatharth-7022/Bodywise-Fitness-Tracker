import { Router, Request, Response, NextFunction } from "express";
import { signup, login, getUser } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

import { authRateLimiter } from "../middleware/rateLimiter";
import {
  handleValidationErrors,
  validateLogin,
  validateSignup,
  validateWeightLog,
} from "../middleware/validationMiddleware";
import {
  getRecentWeights,
  getWeightLogs,
  logWeight,
} from "../controllers/weightController";
import {
  getAllExercises,
  getExerciseById,
  getExercisesByBodyPart,
} from "../controllers/exerciseController";
import {
  getAllRoutines,
  getDefaultRoutines,
  getRoutineById,
} from "../controllers/routineController";

const router = Router();

router.use(authRateLimiter);
router.use(protect);

router.post("/signup", validateSignup, handleValidationErrors, signup);
router.post("/login", validateLogin, handleValidationErrors, login);
router.get("/user", protect, getUser);
router.post("/", validateWeightLog, handleValidationErrors, logWeight);
router.get("/", getWeightLogs);
router.get("/recent-weights", getRecentWeights);
router.get("/exercises", getAllExercises);
router.get("/exercises/:id", getExerciseById);
router.get("/exercises/:bodyPart", getExercisesByBodyPart);
router.get("/routines", getAllRoutines);
router.get("/routines/:id", getRoutineById);
router.get("/routines/default", getDefaultRoutines);

export default router;
