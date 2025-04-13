export interface DefaultRoutine {
  description: string;
  id: number;
  imageUrl: string;
  isDefault: boolean;
  name: string;
  userId: number | null;
}
export interface WorkoutCardProps {
  title: string;
  duration: string;
  calories: string;
  image: string;
  description: string;
  id: number;
}
