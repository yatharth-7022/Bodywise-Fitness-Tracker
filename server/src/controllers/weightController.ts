import { PrismaClient } from "@prisma/client";
import { AuthRequest } from "../middleware/authMiddleware";
import { Request, Response } from "express";
import logger from "../utils/logger";

const prisma = new PrismaClient();
export const logWeight = async (
  req: AuthRequest,
  res: Response
): Promise<void> => {
  try {
    const { value, note, date } = req.body;
    const userId = req.userId!;

    const weight = await prisma.weight.create({
      data: {
        value: parseFloat(value),
        note,
        date: date ? new Date(date) : new Date(),
        userId,
      },
    });
    logger.info(
      `Weight logged for user ${userId}: ${weight.value}kg on ${weight.date}`
    );
    res.status(201).json({ message: "Weight logged successfully", weight });
  } catch (error) {
    logger.error("Weight logging error", error);
    res.status(500).json({ message: "Failed to log weight" });
  }
};
