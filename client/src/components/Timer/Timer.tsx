import React from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
export const Timer = ({
  setTimerFromInput,
  resetTimer,
  startTimer,
  setTimerInput,
  timerInput,
  timerActive,
  pauseTimer,
  timer,
  pad,
}: {
  setTimerFromInput: () => void;
  resetTimer: () => void;
  startTimer: () => void;
  setTimerInput: React.Dispatch<
    React.SetStateAction<{
      min: number;
      sec: number;
    }>
  >;
  timerInput: {
    min: number;
    sec: number;
  };
  timerActive: boolean;
  pauseTimer: () => void;
  timer: number;
  pad: (n: number) => string;
}) => {
  return (
    <div>
      <motion.div
        key="timer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md flex flex-col items-center"
      >
        <div className="flex gap-4 mb-6">
          <input
            type="number"
            min={0}
            max={99}
            value={timerInput.min}
            onChange={(e) =>
              setTimerInput((prev) => ({
                ...prev,
                min: Math.max(0, Math.min(99, Number(e.target.value))),
              }))
            }
            className="w-16 text-3xl bg-zinc-900 border-none rounded-lg text-center text-lime-400 focus:ring-2 focus:ring-lime-400"
            disabled={timerActive}
          />
          <span className="text-3xl text-zinc-400">:</span>
          <input
            type="number"
            min={0}
            max={59}
            value={timerInput.sec}
            onChange={(e) =>
              setTimerInput((prev) => ({
                ...prev,
                sec: Math.max(0, Math.min(59, Number(e.target.value))),
              }))
            }
            className="w-16 text-3xl bg-zinc-900 border-none rounded-lg text-center text-lime-400 focus:ring-2 focus:ring-lime-400"
            disabled={timerActive}
          />
        </div>
        <Button
          onClick={setTimerFromInput}
          disabled={timerActive}
          className="mb-6 bg-lime-400 text-black hover:bg-lime-500"
        >
          Set Timer
        </Button>

        <motion.div
          className="mb-8"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="text-6xl font-mono text-lime-400 drop-shadow-lg">
            {pad(Math.floor(timer / 60))}:{pad(timer % 60)}
          </span>
        </motion.div>

        <div className="flex gap-4">
          {timerActive ? (
            <Button
              onClick={pauseTimer}
              className="bg-zinc-800 text-lime-400 hover:bg-zinc-700"
            >
              <Pause className="w-5 h-5 mr-2" /> Pause
            </Button>
          ) : (
            <Button
              onClick={startTimer}
              className="bg-lime-400 text-black hover:bg-lime-500"
              disabled={timer === 0}
            >
              <Play className="w-5 h-5 mr-2" /> Start
            </Button>
          )}
          <Button
            onClick={resetTimer}
            className="bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          >
            <RotateCcw className="w-5 h-5 mr-2" /> Reset
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
