import { ExerciseDrawerProps } from "@/types/exercises";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { firstLetterUppercase } from "@/utils/handlerFunctions";

export const ExerciseDrawer = ({
  exercise,
  onClose,
  isOpen,
}: ExerciseDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed bottom-0 left-0 right-0 bg-zinc-900 rounded-t-2xl p-6 z-50 max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{exercise.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {exercise.videoUrl && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Video Tutorial</h3>
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={exercise.videoUrl}
                    title={`${exercise.name} tutorial`}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{exercise.description}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Body Part</h3>
                <p className="text-gray-300">
                  {firstLetterUppercase(exercise.bodyPart)}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
