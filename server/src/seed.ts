import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const exercises = [
  // Chest Exercises
  {
    name: "Bench Press",
    description: "Lie on a bench and press the barbell up and down",
    bodyPart: "chest",
    imageUrl: "/exercises/bench-press.jpg",
  },
  {
    name: "Incline Dumbbell Press",
    description: "Press dumbbells upward while lying on an inclined bench",
    bodyPart: "chest",
    imageUrl: "/exercises/incline-dumbbell-press.jpg",
  },
  {
    name: "Chest Fly",
    description: "Open and close arms with dumbbells while lying on a bench",
    bodyPart: "chest",
    imageUrl: "/exercises/chest-fly.jpg",
  },
  {
    name: "Push-ups",
    description: "Classic bodyweight exercise for chest development",
    bodyPart: "chest",
    imageUrl: "/exercises/push-ups.jpg",
  },
  {
    name: "Dips",
    description: "Lower and raise body using parallel bars",
    bodyPart: "chest",
    imageUrl: "/exercises/dips.jpg",
  },
  {
    name: "Cable Crossover",
    description: "Bring cables together in front of chest",
    bodyPart: "chest",
    imageUrl: "/exercises/cable-crossover.jpg",
  },
  {
    name: "Decline Bench Press",
    description: "Barbell press on a decline bench",
    bodyPart: "chest",
    imageUrl: "/exercises/decline-bench-press.jpg",
  },
  {
    name: "Incline Chest Fly",
    description: "Open arms with dumbbells on incline bench",
    bodyPart: "chest",
    imageUrl: "/exercises/incline-chest-fly.jpg",
  },
  {
    name: "Pec Deck Machine",
    description: "Fly movement using pec deck machine",
    bodyPart: "chest",
    imageUrl: "/exercises/pec-deck.jpg",
  },
  {
    name: "Smith Machine Bench Press",
    description: "Bench press on Smith machine",
    bodyPart: "chest",
    imageUrl: "/exercises/smith-bench-press.jpg",
  },
  {
    name: "Resistance Band Push-ups",
    description: "Push-ups with band resistance",
    bodyPart: "chest",
    imageUrl: "/exercises/band-push-ups.jpg",
  },
  {
    name: "Isometric Chest Squeeze",
    description: "Hold press position to contract chest",
    bodyPart: "chest",
    imageUrl: "/exercises/isometric-chest-squeeze.jpg",
  },
  {
    name: "Chest Dips (Leaning Forward)",
    description: "Dip variation focusing chest",
    bodyPart: "chest",
    imageUrl: "/exercises/chest-dips.jpg",
  },
  {
    name: "Machine Chest Press",
    description: "Press chest on seated machine",
    bodyPart: "chest",
    imageUrl: "/exercises/machine-chest-press.jpg",
  },
  {
    name: "Svend Press",
    description: "Press two plates together for chest tension",
    bodyPart: "chest",
    imageUrl: "/exercises/svend-press.jpg",
  },
  {
    name: "Floor Press",
    description: "Press dumbbells while lying on floor",
    bodyPart: "chest",
    imageUrl: "/exercises/floor-press.jpg",
  },
  {
    name: "Explosive Push-ups",
    description: "Push off the ground powerfully",
    bodyPart: "chest",
    imageUrl: "/exercises/explosive-push-ups.jpg",
  },
  {
    name: "Incline Machine Press",
    description: "Chest press using incline machine",
    bodyPart: "chest",
    imageUrl: "/exercises/incline-machine-press.jpg",
  },
  {
    name: "Standing Cable Chest Press",
    description: "Mimic bench press with cables standing",
    bodyPart: "chest",
    imageUrl: "/exercises/standing-cable-chest-press.jpg",
  },
  {
    name: "Incline Barbell Press",
    description: "Barbell press on inclined bench",
    bodyPart: "chest",
    imageUrl: "/exercises/incline-barbell-press.jpg",
  },

  // Shoulder Exercises
  {
    name: "Overhead Press",
    description: "Press barbell or dumbbells overhead",
    bodyPart: "shoulders",
    imageUrl: "/exercises/overhead-press.jpg",
  },
  {
    name: "Lateral Raises",
    description: "Raise dumbbells to the sides",
    bodyPart: "shoulders",
    imageUrl: "/exercises/lateral-raises.jpg",
  },
  {
    name: "Front Raises",
    description: "Raise dumbbells in front of the body",
    bodyPart: "shoulders",
    imageUrl: "/exercises/front-raises.jpg",
  },
  {
    name: "Face Pulls",
    description: "Pull rope towards face using cable machine",
    bodyPart: "shoulders",
    imageUrl: "/exercises/face-pulls.jpg",
  },
  {
    name: "Shrugs",
    description: "Raise shoulders with weights",
    bodyPart: "shoulders",
    imageUrl: "/exercises/shrugs.jpg",
  },
  {
    name: "Arnold Press",
    description: "Rotate dumbbells while pressing overhead",
    bodyPart: "shoulders",
    imageUrl: "/exercises/arnold-press.jpg",
  },
  {
    name: "Rear Delt Fly",
    description: "Fly motion focusing rear delts",
    bodyPart: "shoulders",
    imageUrl: "/exercises/rear-delt-fly.jpg",
  },
  {
    name: "Machine Shoulder Press",
    description: "Overhead press on machine",
    bodyPart: "shoulders",
    imageUrl: "/exercises/machine-shoulder-press.jpg",
  },
  {
    name: "Cable Lateral Raise",
    description: "Side raise using cable",
    bodyPart: "shoulders",
    imageUrl: "/exercises/cable-lateral-raise.jpg",
  },
  {
    name: "Upright Row",
    description: "Lift barbell close to body up to shoulders",
    bodyPart: "shoulders",
    imageUrl: "/exercises/upright-row.jpg",
  },
  {
    name: "Single-arm Dumbbell Press",
    description: "Press dumbbell overhead with one arm",
    bodyPart: "shoulders",
    imageUrl: "/exercises/single-arm-press.jpg",
  },
  {
    name: "Landmine Press",
    description: "Press barbell fixed on one end",
    bodyPart: "shoulders",
    imageUrl: "/exercises/landmine-press.jpg",
  },
  {
    name: "Front Plate Raise",
    description: "Lift weight plate in front",
    bodyPart: "shoulders",
    imageUrl: "/exercises/front-plate-raise.jpg",
  },
  {
    name: "Standing Military Press",
    description: "Strict barbell press standing",
    bodyPart: "shoulders",
    imageUrl: "/exercises/standing-military-press.jpg",
  },
  {
    name: "Reverse Pec Deck Fly",
    description: "Fly backward using machine",
    bodyPart: "shoulders",
    imageUrl: "/exercises/reverse-pec-deck.jpg",
  },
  {
    name: "Dumbbell Clean and Press",
    description: "Clean dumbbells and press overhead",
    bodyPart: "shoulders",
    imageUrl: "/exercises/clean-and-press.jpg",
  },
  {
    name: "Wall Handstand Push-ups",
    description: "Upside-down push-ups against a wall",
    bodyPart: "shoulders",
    imageUrl: "/exercises/handstand-push-ups.jpg",
  },
  {
    name: "Barbell Z Press",
    description: "Seated floor press for shoulders",
    bodyPart: "shoulders",
    imageUrl: "/exercises/z-press.jpg",
  },
  {
    name: "Cable Rear Delt Row",
    description: "Row with emphasis on rear delts",
    bodyPart: "shoulders",
    imageUrl: "/exercises/rear-delt-row.jpg",
  },
  {
    name: "Dumbbell Y Raises",
    description: "Lift dumbbells in Y shape",
    bodyPart: "shoulders",
    imageUrl: "/exercises/y-raises.jpg",
  },

  // Leg Exercises
  {
    name: "Squats",
    description: "Lower body with barbell on shoulders",
    bodyPart: "legs",
    imageUrl: "/exercises/squats.jpg",
  },
  {
    name: "Deadlifts",
    description: "Lift barbell from ground to standing position",
    bodyPart: "legs",
    imageUrl: "/exercises/deadlifts.jpg",
  },
  {
    name: "Lunges",
    description: "Step forward and lower body",
    bodyPart: "legs",
    imageUrl: "/exercises/lunges.jpg",
  },
  {
    name: "Leg Press",
    description: "Press weight with legs on machine",
    bodyPart: "legs",
    imageUrl: "/exercises/leg-press.jpg",
  },
  {
    name: "Calf Raises",
    description: "Raise heels while standing",
    bodyPart: "legs",
    imageUrl: "/exercises/calf-raises.jpg",
  },
  {
    name: "Bulgarian Split Squats",
    description: "Single-leg squat with rear foot elevated",
    bodyPart: "legs",
    imageUrl: "/exercises/bulgarian-split-squats.jpg",
  },
  {
    name: "Leg Extensions",
    description: "Isolate quads using machine",
    bodyPart: "legs",
    imageUrl: "/exercises/leg-extensions.jpg",
  },
  {
    name: "Leg Curls",
    description: "Isolate hamstrings using machine",
    bodyPart: "legs",
    imageUrl: "/exercises/leg-curls.jpg",
  },
  {
    name: "Romanian Deadlifts",
    description: "Hinge with straight legs for hamstring focus",
    bodyPart: "legs",
    imageUrl: "/exercises/romanian-deadlifts.jpg",
  },
  {
    name: "Glute Bridges",
    description: "Lift hips while lying on the floor",
    bodyPart: "legs",
    imageUrl: "/exercises/glute-bridges.jpg",
  },
  {
    name: "Hip Thrusts",
    description: "Barbell thrusts with back on bench",
    bodyPart: "legs",
    imageUrl: "/exercises/hip-thrusts.jpg",
  },
  {
    name: "Step-ups",
    description: "Step on elevated platform with weight",
    bodyPart: "legs",
    imageUrl: "/exercises/step-ups.jpg",
  },
  {
    name: "Sumo Deadlifts",
    description: "Wider stance deadlift for inner thighs",
    bodyPart: "legs",
    imageUrl: "/exercises/sumo-deadlifts.jpg",
  },
  {
    name: "Goblet Squats",
    description: "Hold dumbbell close to chest while squatting",
    bodyPart: "legs",
    imageUrl: "/exercises/goblet-squats.jpg",
  },
  {
    name: "Sissy Squats",
    description: "Lean back while squatting to target quads",
    bodyPart: "legs",
    imageUrl: "/exercises/sissy-squats.jpg",
  },
  {
    name: "Walking Lunges",
    description: "Alternate lunges while walking forward",
    bodyPart: "legs",
    imageUrl: "/exercises/walking-lunges.jpg",
  },
  {
    name: "Hack Squats",
    description: "Use machine to squat with back support",
    bodyPart: "legs",
    imageUrl: "/exercises/hack-squats.jpg",
  },
  {
    name: "Donkey Kicks",
    description: "Kick leg back to work glutes",
    bodyPart: "legs",
    imageUrl: "/exercises/donkey-kicks.jpg",
  },
  {
    name: "Box Jumps",
    description: "Jump onto high platform",
    bodyPart: "legs",
    imageUrl: "/exercises/box-jumps.jpg",
  },
  {
    name: "Single Leg Deadlifts",
    description: "Balance and lift with one leg at a time",
    bodyPart: "legs",
    imageUrl: "/exercises/single-leg-deadlifts.jpg",
  },

  // Arm Exercises
  {
    name: "Bicep Curls",
    description: "Curl dumbbells or barbell",
    bodyPart: "arms",
    imageUrl: "/exercises/bicep-curls.jpg",
  },
  {
    name: "Tricep Extensions",
    description: "Extend arms with dumbbell or cable",
    bodyPart: "arms",
    imageUrl: "/exercises/tricep-extensions.jpg",
  },
  {
    name: "Hammer Curls",
    description: "Curl dumbbells with palms facing in",
    bodyPart: "arms",
    imageUrl: "/exercises/hammer-curls.jpg",
  },
  {
    name: "Skull Crushers",
    description: "Lower barbell behind head while lying",
    bodyPart: "arms",
    imageUrl: "/exercises/skull-crushers.jpg",
  },
  {
    name: "Preacher Curls",
    description: "Curl barbell on preacher bench",
    bodyPart: "arms",
    imageUrl: "/exercises/preacher-curls.jpg",
  },
  {
    name: "Zottman Curls",
    description: "Curl with rotation for forearm engagement",
    bodyPart: "arms",
    imageUrl: "/exercises/zottman-curls.jpg",
  },
  {
    name: "Concentration Curls",
    description: "Curl dumbbell while seated and focused",
    bodyPart: "arms",
    imageUrl: "/exercises/concentration-curls.jpg",
  },
  {
    name: "Overhead Cable Tricep Extension",
    description: "Extend arms behind head with cable",
    bodyPart: "arms",
    imageUrl: "/exercises/overhead-cable-tricep-extension.jpg",
  },
  {
    name: "Cable Bicep Curls",
    description: "Bicep curls using cable machine",
    bodyPart: "arms",
    imageUrl: "/exercises/cable-bicep-curls.jpg",
  },
  {
    name: "Kickbacks",
    description: "Tricep extension behind the body",
    bodyPart: "arms",
    imageUrl: "/exercises/kickbacks.jpg",
  },
  {
    name: "Reverse Curls",
    description: "Curl with palms facing down",
    bodyPart: "arms",
    imageUrl: "/exercises/reverse-curls.jpg",
  },
  {
    name: "Incline Dumbbell Curls",
    description: "Curl while lying back on incline bench",
    bodyPart: "arms",
    imageUrl: "/exercises/incline-curls.jpg",
  },
  {
    name: "Tricep Dips (Bench)",
    description: "Use bench to perform bodyweight dips",
    bodyPart: "arms",
    imageUrl: "/exercises/bench-tricep-dips.jpg",
  },
  {
    name: "EZ Bar Curl",
    description: "Use EZ bar for bicep curls",
    bodyPart: "arms",
    imageUrl: "/exercises/ez-bar-curl.jpg",
  },
  {
    name: "Overhead Dumbbell Extension",
    description: "Hold dumbbell overhead and extend",
    bodyPart: "arms",
    imageUrl: "/exercises/overhead-dumbbell-extension.jpg",
  },
  {
    name: "Drag Curls",
    description: "Curl barbell while dragging close to torso",
    bodyPart: "arms",
    imageUrl: "/exercises/drag-curls.jpg",
  },
  {
    name: "Spider Curls",
    description: "Curl on an incline bench, chest down",
    bodyPart: "arms",
    imageUrl: "/exercises/spider-curls.jpg",
  },
  {
    name: "Barbell Wrist Curls",
    description: "Curl barbell using only wrists",
    bodyPart: "arms",
    imageUrl: "/exercises/barbell-wrist-curls.jpg",
  },
  {
    name: "Reverse Grip Tricep Pushdown",
    description: "Push cable down with reverse grip",
    bodyPart: "arms",
    imageUrl: "/exercises/reverse-tricep-pushdown.jpg",
  },
  {
    name: "Close-Grip Barbell Press",
    description: "Narrow bench press for triceps",
    bodyPart: "arms",
    imageUrl: "/exercises/close-grip-bench-press.jpg",
  },

  // Back Exercises
  {
    name: "Pull-ups",
    description: "Pull body up using bar",
    bodyPart: "back",
    imageUrl: "/exercises/pull-ups.jpg",
  },
  {
    name: "Bent Over Rows",
    description: "Row barbell while bent over",
    bodyPart: "back",
    imageUrl: "/exercises/bent-over-rows.jpg",
  },
  {
    name: "Lat Pulldowns",
    description: "Pull bar down to chest using cable machine",
    bodyPart: "back",
    imageUrl: "/exercises/lat-pulldowns.jpg",
  },
  {
    name: "T-Bar Rows",
    description: "Row T-bar while standing",
    bodyPart: "back",
    imageUrl: "/exercises/t-bar-rows.jpg",
  },
  {
    name: "Seated Cable Rows",
    description: "Row cable while seated",
    bodyPart: "back",
    imageUrl: "/exercises/seated-cable-rows.jpg",
  },
  {
    name: "Chin-ups",
    description: "Underhand grip pull-up for upper back and biceps",
    bodyPart: "back",
    imageUrl: "/exercises/chin-ups.jpg",
  },
  {
    name: "Inverted Rows",
    description: "Pull body to bar in horizontal position",
    bodyPart: "back",
    imageUrl: "/exercises/inverted-rows.jpg",
  },
  {
    name: "Straight Arm Pulldown",
    description: "Pull cable down with straight arms",
    bodyPart: "back",
    imageUrl: "/exercises/straight-arm-pulldown.jpg",
  },
  {
    name: "Rack Pulls",
    description: "Partial deadlift focusing upper back",
    bodyPart: "back",
    imageUrl: "/exercises/rack-pulls.jpg",
  },
  {
    name: "Good Mornings",
    description: "Hinge at hips with barbell on back",
    bodyPart: "back",
    imageUrl: "/exercises/good-mornings.jpg",
  },
  {
    name: "Resistance Band Rows",
    description: "Row with resistance bands",
    bodyPart: "back",
    imageUrl: "/exercises/band-rows.jpg",
  },
  {
    name: "Chest-Supported Rows",
    description: "Row while lying on incline bench",
    bodyPart: "back",
    imageUrl: "/exercises/chest-supported-rows.jpg",
  },
  {
    name: "One-Arm Dumbbell Row",
    description: "Row with one arm supported on bench",
    bodyPart: "back",
    imageUrl: "/exercises/one-arm-row.jpg",
  },
  {
    name: "Machine Lat Pulldown",
    description: "Lat pulldown variation using machine",
    bodyPart: "back",
    imageUrl: "/exercises/machine-lat-pulldown.jpg",
  },
  {
    name: "Towel Pull-ups",
    description: "Pull-up variation using towels for grip",
    bodyPart: "back",
    imageUrl: "/exercises/towel-pull-ups.jpg",
  },
  {
    name: "Barbell Rows",
    description: "Row barbell toward midsection",
    bodyPart: "back",
    imageUrl: "/exercises/barbell-rows.jpg",
  },
  {
    name: "Dumbbell Deadlifts",
    description: "Deadlift variation using dumbbells",
    bodyPart: "back",
    imageUrl: "/exercises/dumbbell-deadlifts.jpg",
  },
  {
    name: "Cable Row (Wide Grip)",
    description: "Row using wide grip attachment",
    bodyPart: "back",
    imageUrl: "/exercises/wide-cable-row.jpg",
  },
  {
    name: "Isometric Hold Pull-ups",
    description: "Hold pull-up at top position",
    bodyPart: "back",
    imageUrl: "/exercises/isometric-pull-ups.jpg",
  },
  {
    name: "Kettlebell Swings",
    description: "Explosive swing targeting posterior chain",
    bodyPart: "back",
    imageUrl: "/exercises/kettlebell-swings.jpg",
  },
];

const routines = [
  {
    name: "Chest Day",
    description: "A comprehensive chest workout routine",
    isDefault: true,
    imageUrl: "/Routines/chest-workout.jpg",
    exercises: [
      { name: "Bench Press", sets: 4, reps: 8 },
      { name: "Incline Dumbbell Press", sets: 3, reps: 10 },
      { name: "Chest Fly", sets: 3, reps: 12 },
      { name: "Push-ups", sets: 3, reps: 15 },
    ],
  },
  {
    name: "Shoulder Day",
    description: "A complete shoulder workout routine",
    isDefault: true,
    imageUrl: "/Routines/shoulder-workout.jpg",
    exercises: [
      { name: "Overhead Press", sets: 4, reps: 8 },
      { name: "Lateral Raises", sets: 3, reps: 12 },
      { name: "Front Raises", sets: 3, reps: 12 },
      { name: "Face Pulls", sets: 3, reps: 15 },
    ],
  },
  {
    name: "Leg Day",
    description: "A challenging leg workout routine",
    isDefault: true,
    imageUrl: "/Routines/leg-workout.jpg",
    exercises: [
      { name: "Squats", sets: 4, reps: 8 },
      { name: "Deadlifts", sets: 3, reps: 6 },
      { name: "Lunges", sets: 3, reps: 10 },
      { name: "Leg Press", sets: 3, reps: 12 },
    ],
  },
  {
    name: "Arm Day",
    description: "An intense arm workout routine",
    isDefault: true,
    imageUrl: "/Routines/arm-workout.jpg",
    exercises: [
      { name: "Bicep Curls", sets: 3, reps: 12 },
      { name: "Tricep Extensions", sets: 3, reps: 12 },
      { name: "Hammer Curls", sets: 3, reps: 12 },
      { name: "Skull Crushers", sets: 3, reps: 12 },
    ],
  },
  {
    name: "Back Day",
    description: "A complete back workout routine",
    isDefault: true,
    imageUrl: "/Routines/back-workout.jpg",
    exercises: [
      { name: "Pull-ups", sets: 3, reps: 8 },
      { name: "Bent Over Rows", sets: 4, reps: 8 },
      { name: "Lat Pulldowns", sets: 3, reps: 10 },
      { name: "T-Bar Rows", sets: 3, reps: 10 },
    ],
  },
];

async function main() {
  // Create exercises
  for (const exercise of exercises) {
    await prisma.exercise.upsert({
      where: { id: -1 }, // This will always create new exercises
      update: {},
      create: exercise,
    });
  }

  // Create routines with their exercises
  for (const routine of routines) {
    const createdRoutine = await prisma.routine.create({
      data: {
        name: routine.name,
        description: routine.description,
        isDefault: routine.isDefault,
        imageUrl: routine.imageUrl,
      },
    });

    // Add exercises to routine
    for (const exercise of routine.exercises) {
      const exerciseRecord = await prisma.exercise.findFirst({
        where: { name: exercise.name },
      });

      if (exerciseRecord) {
        await prisma.routineExercise.create({
          data: {
            routineId: createdRoutine.id,
            exerciseId: exerciseRecord.id,
            sets: exercise.sets,
            exerciseSets: {
              create: Array.from({ length: exercise.sets }).map(() => ({
                weight: 0,
                reps: exercise.reps,
              })),
            },
          },
        });
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
