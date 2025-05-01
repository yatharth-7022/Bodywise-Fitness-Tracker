import { prisma } from "../config/database";
import { AuthRequest } from "../middleware/authMiddleware";
import { Response, Request } from "express";

export const startSession = async (req: AuthRequest, res: Response) => {
  try {
    const { routineId } = req.params;
    const userId = req.userId;

    if (!routineId || !userId) {
      return res
        .status(400)
        .json({ message: "Routine ID and User ID are required" });
    }

    //Checking if he routine exists
    const routine = await prisma.routine.findUnique({
      where: { id: parseInt(routineId) },
      include: {
        exercises: {
          include: {
            exercise: true,
            exerciseSets: {
              where: {
                userId: userId,
              },
              orderBy: { id: "desc" },
            },
          },
        },
      },
    });
    if (!routine) {
      return res.status(404).json({ message: "Routine not found" });
    }

    //New Session
    const session = await prisma.workoutSession.create({
      data: {
        routineId: parseInt(routineId),
        userId,
        startTime: new Date(),
      },
    });

    //Create Session Exercises With Users Last Saved Values
    const sessionExercisesPromises = routine.exercises.map(
      async (routineExercise) => {
        const sessionExercise = await prisma.sessionExercise.create({
          data: {
            sessionId: session.id,
            exerciseId: routineExercise.exerciseId,
          },
        });
        let setsToCreate = [];
        if (routineExercise.exerciseSets.length > 0) {
          //Using prev values
          setsToCreate = routineExercise.exerciseSets.map((set) => ({
            sessionExerciseId: sessionExercise.id,
            weight: set.weight,
            reps: set.reps,
            isCompleted: false,
          }));
        } else {
          //Creating default sets
          setsToCreate = Array.from({ length: routineExercise.sets }, () => ({
            sessionExerciseId: sessionExercise.id,
            weight: 0,
            reps: 0,
            isCompleted: false,
          }));
        }
        await prisma.sessionSet.createMany({
          data: setsToCreate,
        });

        return prisma.sessionExercise.findUnique({
          where: { id: sessionExercise.id },
          include: {
            exercise: true,
            sets: true,
          },
        });
      }
    );
    const sessionExercises = await Promise.all(sessionExercisesPromises);

    return res.status(201).json({
      ...session,
      exercise: sessionExercises,
    });
  } catch (error) {
    console.error("Error in starting session", error);
    return res
      .status(500)
      .json({
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
  }
};
