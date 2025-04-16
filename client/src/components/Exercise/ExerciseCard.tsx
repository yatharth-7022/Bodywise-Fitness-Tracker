import { ExerciseCard } from "@/types/exercises";
import { firstLetterUppercase } from "@/utils/handlerFunctions";

export const ExerciseCardContent = ({
  exercise,
  onClick,
}: {
  exercise: ExerciseCard;
  onClick: () => void;
}) => {
  return (
    <div
      className="bg-zinc-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-750 transition-colors"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_API_URL}${exercise?.imageUrl}`}
          alt={exercise?.name}
          className="w-full object-cover h-40"
        />
        {/* {add type later} */}
        {/* <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
          {exercise.type}
        </div> */}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{exercise?.name}</h3>
        <p className="text-gray-400 text-sm mb-2">
          {firstLetterUppercase(exercise?.bodyPart)}
        </p>
        <div className="flex items-center text-gray-500 text-sm">
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          {/* {exercise?.se/ts} */}
        </div>
      </div>
    </div>
  );
};
