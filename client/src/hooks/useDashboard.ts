import { useQuery } from "@tanstack/react-query";
import api from "../../intercerptor";
import { DEFAULT_ROUTINE, ROUTINE_BY_ID } from "@/api";
import { DASHBOARD, ROUTINE } from "@/routes/routes";
import { useLocation, useParams } from "react-router-dom";
import { DefaultRoutine } from "@/types/dashboard";

export const useDashboard = () => {
  const location = useLocation();
  const { id } = useParams();

  const { data: defaultRoutines } = useQuery<DefaultRoutine[]>({
    queryKey: ["default-routines"],
    queryFn: async () => {
      const response = await api.get(
        `${DEFAULT_ROUTINE}?includeExercises=false`
      );
      return response.data;
    },
    // staleTime: 1000 * 60 * 60 * 24,
    enabled: location.pathname === DASHBOARD,
    refetchOnWindowFocus: false,
  });

  const { data: routineById } = useQuery({
    queryKey: ["routine-by-id"],
    queryFn: async () => {
      const response = await api.get(`${ROUTINE_BY_ID}${id}`);
      return response.data;
    },
    enabled: location.pathname.startsWith(ROUTINE),
    refetchOnWindowFocus: false,
  });
  return { defaultRoutines, routineById };
};
