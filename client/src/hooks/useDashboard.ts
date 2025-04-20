import { useQuery } from "@tanstack/react-query";
import api from "../../intercerptor";
import { DEFAULT_ROUTINE, ROUTINE_BY_ID } from "@/api";
import { DASHBOARD, ROUTINE } from "@/routes/routes";
import { useLocation, useParams } from "react-router-dom";
import { DefaultRoutine, Routine } from "@/types/dashboard";

export const useDashboard = () => {
  const location = useLocation();
  const { id } = useParams();

  // For dashboard view - lightweight routine data without exercises
  const { data: defaultRoutines } = useQuery<DefaultRoutine[]>({
    queryKey: ["default-routines"],
    queryFn: async () => {
      const response = await api.get(
        `${DEFAULT_ROUTINE}?includeExercises=false`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 60 * 24, // Cache for 24 hours
    enabled: location.pathname === DASHBOARD,
    refetchOnWindowFocus: false,
  });

  // For routine detail view - full routine data with exercises
  const { data: routineById, isLoading: isRoutineLoading } = useQuery<Routine>({
    queryKey: ["routine-by-id", id], // Add id to query key for proper caching
    queryFn: async () => {
      const response = await api.get(
        `${ROUTINE_BY_ID}${id}?includeExercises=true`
      );
      return response.data;
    },
    enabled: location.pathname.startsWith(ROUTINE) && !!id,
    refetchOnWindowFocus: false,
  });

  return { defaultRoutines, routineById, isRoutineLoading };
};
