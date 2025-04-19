import { ExerciseDrawerProps } from "@/types/exercises";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { firstLetterUppercase } from "@/utils/handlerFunctions";
import ReactPlayer from "react-player/lazy";
import { useState } from "react";

export const ExerciseDrawer = ({
  exercise,
  onClose,
  isOpen,
}: ExerciseDrawerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

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
              <h2 className="text-xl font-bold text-white">{exercise.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            {exercise.videoUrl && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Video Tutorial
                </h3>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <ReactPlayer
                    url={exercise.videoUrl}
                    width="100%"
                    height="100%"
                    playing={isPlaying}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    controls={true}
                    playsinline={true}
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 1,
                          rel: 0,
                          playsinline: 1,
                          origin: window.location.origin,
                          enablejsapi: 1,
                          controls: 1,
                          fs: 1,
                          autoplay: 0,
                          showinfo: 0,
                          iv_load_policy: 3,
                          playsInline: 1,
                        },
                      },
                    }}
                    className="absolute top-0 left-0"
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Description
              </h3>
              <p className="text-gray-300">{exercise.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Body Part
              </h3>
              <p className="text-gray-300">
                {firstLetterUppercase(exercise.bodyPart)}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
