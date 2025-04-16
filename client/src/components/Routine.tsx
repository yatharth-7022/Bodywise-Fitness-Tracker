import React from "react";
import {
  ChevronLeft,
  Bookmark,
  Clock,
  WeightIcon,
  Dumbbell,
} from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";
import { DASHBOARD } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { firstLetterUppercase } from "@/utils/handlerFunctions";

const Routine = () => {
  const { routineById } = useDashboard();
  const navigate = useNavigate();
  return (
    <div className=" h-full w-full max-w-md mx-auto overflow-hidden">
      <div className="relative h-full">
        <div className="h-64  relative">
          <img
            src={`${import.meta.env.VITE_API_URL}/${routineById?.imageUrl}`}
            alt="Man doing bench press"
            className="w-full h-full object-cover opacity-90"
          />
          <div
            onClick={() => navigate(DASHBOARD)}
            className="absolute top-4 left-4 p-2 rounded-full bg-black/20"
          >
            <ChevronLeft className="text-white" size={24} />
          </div>
          <div className="absolute top-4 right-4 p-2 rounded-full bg-black/20">
            <Bookmark className="text-white" size={24} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[#1A1A1D] rounded-t-3xl p-4 pb-5">
          <h1 className="text-2xl font-bold mb-2">{routineById?.name}</h1>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            {/* <span>Last Exercised on 12/15/2023</span> */}
            <div className="flex items-center ml-auto space-x-1">
              <span className="flex  gap-0.5 items-center">
                <Clock color="white" size={16} />
                <span>46m</span>
              </span>
              <span className="flex gap-0.5 items-center">
                <WeightIcon color="white" size={16} />
                <span>7695 Kg</span>
              </span>
              <span className="flex gap-0.5 items-center">
                <Dumbbell color="white" size={16} />
                <span>2 PRs</span>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {routineById?.exercises.map((exercise) => (
              <div
                key={exercise?.id}
                className="flex items-center border-b border-gray-100 pb-4"
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-200 mr-3">
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${
                      exercise?.exercise?.imageUrl
                    }`}
                    alt="Chest Press"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">
                    {firstLetterUppercase(exercise?.exercise?.name)}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {firstLetterUppercase(exercise?.exercise?.bodyPart)}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <span className="text-sm text-blue-500 font-medium">
                    Free Weight
                  </span>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Clock size={14} className="mr-1" />
                    <span>
                      {exercise?.sets} Sets x {exercise?.reps} Reps
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mb-2 bg-blue-600 text-white py-3 rounded-lg font-medium mt-3">
            Start Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Routine;
