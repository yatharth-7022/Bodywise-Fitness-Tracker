import { useExercises } from "@/hooks/useExercises";
import { Loader2, Search } from "lucide-react";
import { ExerciseCardContent } from "./ExerciseCard";
import { ExerciseDrawer } from "./ExerciseDrawer";
import { useState } from "react";

const bodyParts = ["All", "Chest", "Back", "Arms", "Shoulders", "Legs"];

export const ALlExercises = () => {
  const {
    allExercises,
    selectedExercise,
    showModal,
    activeFilter,
    handleExerciseClick,
    setShowModal,
    setActiveFilter,
    isLoadingAllExercises,
  } = useExercises();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredExercises = allExercises?.filter((exercise) => {
    const matchesBodyPart =
      activeFilter === "All" ||
      exercise?.bodyPart?.toLowerCase() === activeFilter.toLowerCase();

    const matchesSearch =
      searchQuery === "" ||
      exercise?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise?.description
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      exercise?.bodyPart?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesBodyPart && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      {isLoadingAllExercises && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-lime-400" />
            <p className="text-lg text-white font-medium">
              Getting exercises...
            </p>
          </div>
        </div>
      )}
      <main className="flex-1 px-4 pb-20 pt-4">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Exercises</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search exercises..."
                className="bg-gray-800 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="flex overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex space-x-2">
              {bodyParts.map((part) => (
                <button
                  key={part}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${
                    activeFilter === part
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveFilter(part)}
                >
                  {part}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises?.map((exercise) => (
            <ExerciseCardContent
              key={exercise.id}
              exercise={exercise}
              onClick={() => handleExerciseClick(exercise)}
            />
          ))}
        </div>
      </main>

      <ExerciseDrawer
        exercise={selectedExercise!}
        onClose={() => setShowModal(false)}
        isOpen={showModal}
      />
    </div>
  );
};
