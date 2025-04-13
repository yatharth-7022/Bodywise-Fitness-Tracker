import React from "react";
import { ChevronLeft, Bookmark, Clock, Weight, Dumbbell } from "lucide-react";
import { useDashboard } from "@/hooks/useDashboard";

const Routine = () => {
  const { routineById } = useDashboard();
  console.log({ routineById });
  return (
    <div className=" h-full w-full max-w-md mx-auto overflow-hidden">
      <div className="relative h-full">
        <div className="h-64  relative">
          <img
            src="/api/placeholder/400/320"
            alt="Man doing bench press"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute top-4 left-4 p-2 rounded-full bg-black/20">
            <ChevronLeft className="text-white" size={24} />
          </div>
          <div className="absolute top-4 right-4 p-2 rounded-full bg-black/20">
            <Bookmark className="text-white" size={24} />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-4 pb-5">
          <h1 className="text-2xl font-bold mb-2">Chest Day</h1>

          <div className="flex items-center text-gray-500 text-sm mb-4">
            <span>Last Exercised on 12/15/2023</span>
            <div className="flex items-center ml-auto space-x-2">
              <span className="flex items-center">
                <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full mr-1"></span>
                <span>46m</span>
              </span>
              <span className="flex items-center">
                <span className="inline-block w-4 h-4 bg-yellow-200 rounded-full mr-1"></span>
                <span>7695 Kg</span>
              </span>
              <span className="flex items-center">
                <span className="inline-block w-4 h-4 bg-gray-300 rounded-full mr-1"></span>
                <span>2 PRs</span>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-100 pb-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-200 mr-3">
                <img
                  src="/api/placeholder/56/56"
                  alt="Chest Press"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Chest Press</h3>
                <p className="text-gray-500 text-sm">Chest</p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-sm text-blue-500 font-medium">
                  Free Weight
                </span>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Clock size={14} className="mr-1" />
                  <span>3 Sets x 10 Reps</span>
                </div>
              </div>
            </div>

            <div className="flex items-center border-b border-gray-100 pb-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-200 mr-3">
                <img
                  src="/api/placeholder/56/56"
                  alt="Barbell Bench Press"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Barbell Bench Press</h3>
                <p className="text-gray-500 text-sm">Chest</p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-sm text-blue-500 font-medium">
                  Smith Machine
                </span>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Clock size={14} className="mr-1" />
                  <span>3 Sets x 10 Reps</span>
                </div>
              </div>
            </div>

            <div className="flex items-center pb-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-200 mr-3">
                <img
                  src="/api/placeholder/56/56"
                  alt="Dumbbell bench press"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">Dumbbell bench press</h3>
                <p className="text-gray-500 text-sm">Chest</p>
              </div>
              <div className="ml-auto text-right">
                <span className="text-sm text-blue-500 font-medium">
                  Free Weight
                </span>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Clock size={14} className="mr-1" />
                  <span>3 Sets x 10 Reps</span>
                </div>
              </div>
            </div>
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
