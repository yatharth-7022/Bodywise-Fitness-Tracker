import { LOGIN, SIGNUP, USER_INFO } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "@/routes/routes";
import { LoginData, SignupData } from "@/types/auth";
import api from "../../intercerptor";

export const useAuth = () => {
  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: SignupData) => {
      const response = await api.post(SIGNUP, data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Account created successfully!");
      navigate(DASHBOARD);
    },
    onError: (error: Error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginData) => {
      const response = await api.post(LOGIN, data);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully!");
      navigate(DASHBOARD);
    },
    onError: (error: Error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await api.get(USER_INFO);
      return response.data;
    },
    enabled: location.pathname === DASHBOARD,
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  return {
    signUpMutation,
    isLoading: signUpMutation.isPending,
    loginMutation,
    isLoginLoading: loginMutation.isPending,
    userData,
  };
};
