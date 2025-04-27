import React from "react";
import { motion } from "framer-motion";
import { Checkbox } from "../ui/checkbox";

const SessionSetRow = ({
  set,
  idx,
  onChange,
}: {
  set: {
    bestWeight?: number;
    weight: number;
    reps: number;
    isCompleted?: boolean;
  };
  idx: number;
  onChange: (
    field: "kg" | "reps" | "isCompleted",
    value: number | boolean
  ) => void;
}) => {
  console.log({ set });
  return (
    <motion.div
      className="flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: idx * 0.05 }}
    >
      <span className="w-5 text-zinc-400">{idx + 1}.</span>
      <input
        type="number"
        className="w-16 rounded bg-zinc-900 text-white px-2 py-1 border border-zinc-700 focus:outline-lime-400"
        value={set.weight}
        onChange={(e) => onChange("kg", Number(e.target.value))}
      />
      <span className="text-zinc-400">kg</span>
      <input
        type="number"
        className="w-12 rounded bg-zinc-900 text-white px-2 py-1 border border-zinc-700 focus:outline-lime-400"
        value={set.reps}
        onChange={(e) => onChange("reps", Number(e.target.value))}
      />
      <span className="text-zinc-400">reps</span>

      <Checkbox
        checked={!!set.isCompleted}
        className={`ml-auto accent-lime-400 w-5 h-5 ${
          set.isCompleted ? "bg-lime-400" : "bg-zinc-800"
        }`}
        onCheckedChange={(checked) => onChange("isCompleted", !!checked)}
      />
    </motion.div>
  );
};

export default SessionSetRow;
