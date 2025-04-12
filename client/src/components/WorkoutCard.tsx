import { Card, CardContent } from "@/components/ui/card";
import { Clock, Flame } from "lucide-react";

interface WorkoutCardProps {
  title: string;
  duration: string;
  calories: string;
  image: string;
  lastExercised: string;
}

export const WorkoutCard = ({
  title,
  duration,
  calories,
  image,
  lastExercised,
}: WorkoutCardProps) => {
  return (
    <Card className="w-[280px] bg-zinc-900 border-zinc-800 overflow-hidden">
      <div
        className="h-36 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${image})`,
        }}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-2">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4" />
            {calories}
          </div>
        </div>
        <p className="text-xs text-zinc-500">{lastExercised}</p>
      </CardContent>
    </Card>
  );
};
