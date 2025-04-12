import { Router, Request, Response, NextFunction } from "express";
import { signup, login, getUser } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

import { authRateLimiter } from "../middleware/rateLimiter";
import {
  handleValidationErrors,
  validateLogin,
  validateSignup,
} from "../middleware/validationMiddleware";

const router = Router();

// Apply rate limiting to all auth routes
router.use(authRateLimiter);

router.post("/signup", validateSignup, handleValidationErrors, signup);
router.post("/login", validateLogin, handleValidationErrors, login);
router.get("/user", protect, getUser);

export default router;
