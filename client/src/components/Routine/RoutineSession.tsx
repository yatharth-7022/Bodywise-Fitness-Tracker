import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SessionHeader from "./SessionHeader";
import SessionExerciseCard from "./SessionExerciseCard";
import { Exercise } from "@/types/routine";
import { useDashboard } from "@/hooks/useDashboard";

const RoutineSession = () => {
  const { routineById, isRoutineLoading } = useDashboard();
  const navigate = useNavigate();

  const [exercises, setExercises] = useState<Exercise[]>(
    routineById?.exercises || []
  );

  const handleSetChange = (
    exerciseIdx: number,
    setIdx: number,
    field: "kg" | "reps" | "isCompleted",
    value: number | boolean
  ) => {
    setExercises((prev) =>
      prev.map((ex, exIdx) =>
        exIdx === exerciseIdx
          ? {
              ...ex,
              exerciseSets: ex.exerciseSets?.map((set, sIdx) =>
                sIdx === setIdx
                  ? { ...set, [field === "kg" ? "weight" : field]: value }
                  : set
              ),
            }
          : ex
      )
    );
  };

  const handleAddSet = (exerciseIdx: number) => {
    setExercises((prev) =>
      prev.map((ex, exIdx) =>
        exIdx === exerciseIdx
          ? {
              ...ex,
              exerciseSets: [
                ...(ex.exerciseSets || []),
                {
                  weight: 0,
                  reps: 0,
                  isCompleted: false,
                  routineExerciseId: 0,
                  userId: 0,
                },
              ],
            }
          : ex
      )
    );
  };

  const handleSubmit = () => {
    const payload = exercises.map((ex) => ({
      exerciseName: ex.exercise.name,
      sets: ex.exerciseSets,
    }));
    console.log("Submit payload:", payload);
    // ...submit logic...
  };

  if (isRoutineLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-400"></div>
      </div>
    );
  }

  if (!routineById) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div>
          <h2 className="text-xl font-semibold mb-2">Routine not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-lime-400 hover:underline"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col pb-24">
      <SessionHeader routineName={routineById.name} />
      <div className="flex-1 px-2 py-4 space-y-6">
        {exercises.map((exercise, exerciseIdx) => (
          <SessionExerciseCard
            key={exerciseIdx}
            exercise={exercise}
            exerciseIdx={exerciseIdx}
            onSetChange={handleSetChange}
            onAddSet={handleAddSet}
          />
        ))}
      </div>
      <button
        className="mt-4 w-full bg-lime-500 text-black font-bold py-2 rounded-xl shadow hover:bg-lime-400 transition"
        onClick={handleSubmit}
        type="button"
      >
        Submit Session
      </button>
    </div>
  );
};

export default RoutineSession;
