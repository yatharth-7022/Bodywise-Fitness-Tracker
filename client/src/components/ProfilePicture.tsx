import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";

interface ProfilePictureProps {
  src?: string | null;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
};

export const ProfilePicture = ({
  src,
  size = "md",
  className = "",
}: ProfilePictureProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={`relative rounded-full overflow-hidden bg-zinc-800 flex items-center justify-center ${sizes[size]} ${className}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {src && !imageError ? (
          <motion.img
            src={src}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        ) : (
          <User className={`${iconSizes[size]} text-zinc-400`} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};
