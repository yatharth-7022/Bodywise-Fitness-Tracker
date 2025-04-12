import { PrismaClient } from "@prisma/client";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import logger from "../utils/logger";

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
    const hashedPassword = await brcypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({
      user: { id: user.id, username: user.name, email: user.email },
      token,
    });
  } catch (error) {
    logger.error("Signup error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const valid = await brcypt.compare(password, user.password);
    if (!valid) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });
    res.status(201).json({
      user: { id: user.id, username: user.name, email: user.email },
      token,
    });
  } catch (error) {
    logger.error("Login error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: { id: true, name: true, email: true },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.status(200).json({ user });
  } catch (error) {
    logger.error("Get user error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
