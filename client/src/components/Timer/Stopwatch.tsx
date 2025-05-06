import React from "react";
import { Button } from "../ui/button";
import { Flag, Pause, Play, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export const Stopwatch = ({
  laps,
  pad,
  addLap,
  resetStopwatch,
  stopwatchActive,
  stopwatch,
  startStopwatch,
  pauseStopwatch,
}: {
  laps: number[];
  pad: (n: number) => string;
  addLap: () => void;
  resetStopwatch: () => void;
  stopwatchActive: boolean;
  stopwatch: number;
  pauseStopwatch: () => void;
  startStopwatch: () => void;
}) => {
  return (
    <>
      <motion.div
        key="stopwatch"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md flex flex-col items-center"
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="text-6xl font-mono text-lime-400 drop-shadow-lg">
            {pad(Math.floor(stopwatch / 60))}:{pad(stopwatch % 60)}
          </span>
        </motion.div>

        <div className="flex gap-4 mb-6">
          {stopwatchActive ? (
            <Button
              onClick={pauseStopwatch}
              className="bg-zinc-800 text-lime-400 hover:bg-zinc-700"
            >
              <Pause className="w-5 h-5 mr-2" /> Pause
            </Button>
          ) : (
            <Button
              onClick={startStopwatch}
              className="bg-lime-400 text-black hover:bg-lime-500"
            >
              <Play className="w-5 h-5 mr-2" /> Start
            </Button>
          )}
          <Button
            onClick={resetStopwatch}
            className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          >
            <RotateCcw className="w-5 h-5 mr-2" /> Reset
          </Button>
          <Button
            onClick={addLap}
            disabled={!stopwatchActive}
            className="bg-lime-400 text-black hover:bg-lime-500"
          >
            <Flag className="w-5 h-5 mr-2" /> Lap
          </Button>
        </div>

        <div className="w-full max-w-xs">
          {laps.length > 0 && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-2"
            >
              {laps.map((lap, idx) => (
                <li
                  key={laps.length - idx}
                  className="flex justify-between items-center bg-zinc-900 rounded-lg px-4 py-2"
                >
                  <span className="text-zinc-400">Lap {laps.length - idx}</span>
                  <span className="text-lime-400 font-mono">
                    {pad(Math.floor(lap / 60))}:{pad(lap % 60)}
                  </span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.div>
    </>
  );
};
