import { motion } from "framer-motion";
import SessionSetRow from "./SessionSetRow";
import { Exercise } from "@/types/routine";

const SessionExerciseCard = ({
  exercise,
  exerciseIdx,
  onSetChange,
  onAddSet,
}: {
  exercise: Exercise;
  exerciseIdx: number;
  onSetChange: (
    exerciseIdx: number,
    setIdx: number,
    field: "kg" | "reps" | "isCompleted",
    value: number | boolean
  ) => void;
  onAddSet: (exerciseIdx: number) => void;
}) => {
  console.log({ exercise });
  return (
    <motion.div
      className="bg-zinc-900 rounded-2xl shadow-lg p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-800 flex items-center justify-center">
          {exercise?.exercise?.imageUrl ? (
            <img
              src={`${import.meta.env.VITE_API_URL}/${
                exercise.exercise.imageUrl
              }`}
              alt={exercise.exercise.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-zinc-400">No Img</span>
          )}
        </div>
        <div>
          <h2 className="font-semibold text-lg">{exercise.exercise.name}</h2>
          <p className="text-zinc-400 text-xs">{exercise.exercise.bodyPart}</p>
        </div>
      </div>
      <div className="space-y-2">
        {exercise.exerciseSets?.map((set, setIdx) => (
          <SessionSetRow
            key={set.routineExerciseId || setIdx}
            set={set}
            idx={setIdx}
            onChange={(field, value) =>
              onSetChange(exerciseIdx, setIdx, field, value)
            }
          />
        ))}
        <button
          className="mt-2 w-full bg-zinc-800 text-lime-400 py-1 rounded hover:bg-zinc-700 transition"
          onClick={() => onAddSet(exerciseIdx)}
          type="button"
        >
          + Add Set
        </button>
      </div>
    </motion.div>
  );
};

export default SessionExerciseCard;
