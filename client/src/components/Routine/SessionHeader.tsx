import React from "react";
import { Watch } from "lucide-react";
import { motion } from "framer-motion";

const SessionHeader = ({ routineName }: { routineName: string }) => {
  // Timer logic will be added later
  return (
    <motion.div
      className="flex items-center justify-between px-4 py-4 bg-zinc-900 shadow-md"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <h1 className="text-xl font-bold">{routineName}</h1>
      <div className="flex items-center gap-2">
        <Watch className="text-lime-400" />
        <span className="font-mono text-lg text-lime-400">00:00</span>
      </div>
    </motion.div>
  );
};

export default SessionHeader;
