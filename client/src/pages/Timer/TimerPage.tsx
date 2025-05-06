import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer as TimerIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "@/routes/routes";
import { Stopwatch } from "../../components/Timer/Stopwatch";
import { useTimer } from "@/hooks/useTimer";
import { Timer } from "@/components/Timer/Timer";

const pad = (n: number) => n.toString().padStart(2, "0");

export const TimerPage = () => {
  const navigate = useNavigate();
  const {
    pauseTimer,
    addLap,
    resetStopwatch,
    pauseStopwatch,
    startStopwatch,
    laps,
    setTimerFromInput,
    resetTimer,
    startTimer,
    setTimerInput,
    tab,
    setTab,
    timerInput,
    timerActive,
    stopwatchActive,
    stopwatch,
    timer,
  } = useTimer();

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-start py-8 px-4">
      <div className="w-full max-w-md flex items-center mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(DASHBOARD)}
          className="mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <TimerIcon className="text-lime-400" /> Timer & Stopwatch
        </h1>
      </div>
      <div className="w-full max-w-md flex relative mb-8">
        <button
          className={`flex-1 py-2 text-lg font-semibold transition-colors ${
            tab === "timer" ? "text-lime-400" : "text-zinc-400"
          }`}
          onClick={() => setTab("timer")}
        >
          Timer
        </button>
        <button
          className={`flex-1 py-2 text-lg font-semibold transition-colors ${
            tab === "stopwatch" ? "text-lime-400" : "text-zinc-400"
          }`}
          onClick={() => setTab("stopwatch")}
        >
          Stopwatch
        </button>
        <motion.div
          className="absolute bottom-0 h-1 w-1/2 bg-lime-400 rounded-full"
          animate={{ left: tab === "timer" ? "0%" : "50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      {/* Timer */}

      <AnimatePresence mode="wait">
        {tab === "timer" && (
          <Timer
            setTimerFromInput={setTimerFromInput}
            resetTimer={resetTimer}
            startTimer={startTimer}
            setTimerInput={setTimerInput}
            timerInput={timerInput}
            timerActive={timerActive}
            pauseTimer={pauseTimer}
            timer={timer}
            pad={pad}
          />
        )}

        {/* Stopwatch */}

        {tab === "stopwatch" && (
          <Stopwatch
            laps={laps}
            pad={pad}
            addLap={addLap}
            resetStopwatch={resetStopwatch}
            stopwatchActive={stopwatchActive}
            stopwatch={stopwatch}
            pauseStopwatch={pauseStopwatch}
            startStopwatch={startStopwatch}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
