import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create default exercises
  const exercises = await Promise.all([
    prisma.exercise.create({
      data: {
        name: "Bench Press",
        description:
          "A compound exercise that targets the chest, shoulders, and triceps",
        bodyPart: "CHEST",
      },
    }),
    prisma.exercise.create({
      data: {
        name: "Squat",
        description: "A compound exercise that targets the legs and core",
        bodyPart: "LEGS",
      },
    }),
    prisma.exercise.create({
      data: {
        name: "Deadlift",
        description:
          "A compound exercise that targets the back, legs, and core",
        bodyPart: "BACK",
      },
    }),
    prisma.exercise.create({
      data: {
        name: "Overhead Press",
        description:
          "A compound exercise that targets the shoulders and triceps",
        bodyPart: "SHOULDERS",
      },
    }),
    prisma.exercise.create({
      data: {
        name: "Pull-up",
        description: "A compound exercise that targets the back and biceps",
        bodyPart: "BACK",
      },
    }),
  ]);

  // Create default routines
  await Promise.all([
    prisma.routine.create({
      data: {
        name: "Chest Day",
        description: "A focused chest workout routine",
        imageUrl: "/images/routines/chest-day.jpg",
        duration: 45 * 60, // 45 minutes in seconds
        isDefault: true,
        exercises: {
          create: [
            {
              exerciseId: exercises[0].id,
              sets: 4,
              exerciseSets: {
                create: Array.from({ length: 4 }).map(() => ({
                  weight: 0,
                  reps: 8,
                  isCompleted: false,
                })),
              },
            },
          ],
        },
      },
    }),
    prisma.routine.create({
      data: {
        name: "Leg Day",
        description: "A comprehensive leg workout routine",
        imageUrl: "/images/routines/leg-day.jpg",
        duration: 50 * 60, // 50 minutes in seconds
        isDefault: true,
        exercises: {
          create: [
            {
              exerciseId: exercises[1].id,
              sets: 4,
              exerciseSets: {
                create: Array.from({ length: 4 }).map(() => ({
                  weight: 0,
                  reps: 10,
                  isCompleted: false,
                })),
              },
            },
          ],
        },
      },
    }),
    prisma.routine.create({
      data: {
        name: "Back Day",
        description: "A focused back workout routine",
        imageUrl: "/images/routines/back-day.jpg",
        duration: 40 * 60, // 40 minutes in seconds
        isDefault: true,
        exercises: {
          create: [
            {
              exerciseId: exercises[2].id,
              sets: 4,
              exerciseSets: {
                create: Array.from({ length: 4 }).map(() => ({
                  weight: 0,
                  reps: 6,
                  isCompleted: false,
                })),
              },
            },
            {
              exerciseId: exercises[4].id,
              sets: 3,
              exerciseSets: {
                create: Array.from({ length: 3 }).map(() => ({
                  weight: 0,
                  reps: 8,
                  isCompleted: false,
                })),
              },
            },
          ],
        },
      },
    }),
    prisma.routine.create({
      data: {
        name: "Shoulder Day",
        description: "A focused shoulder workout routine",
        imageUrl: "/images/routines/shoulder-day.jpg",
        duration: 35 * 60, // 35 minutes in seconds
        isDefault: true,
        exercises: {
          create: [
            {
              exerciseId: exercises[3].id,
              sets: 4,
              exerciseSets: {
                create: Array.from({ length: 4 }).map(() => ({
                  weight: 0,
                  reps: 8,
                  isCompleted: false,
                })),
              },
            },
          ],
        },
      },
    }),
  ]);

  console.log("Database has been seeded. 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
