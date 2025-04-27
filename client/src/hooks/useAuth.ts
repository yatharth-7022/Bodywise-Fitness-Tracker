import { LOGIN, LOGOUT, SIGNUP } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DASHBOARD, UPLOAD_PROFILE_PICTURE } from "@/routes/routes";
import { LoginData, SignupData } from "@/types/auth";
import api from "../../intercerptor";
import { LOGIN as LOGIN_ROUTE } from "@/routes/routes";
import { API_CONFIG } from "@/api";

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
      navigate(UPLOAD_PROFILE_PICTURE);
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

  const logoutMutation = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const response = await api.post(LOGOUT);
      return response.data;
    },
    onSuccess: () => {
      localStorage.removeItem("token");
      toast.success("Logged out successfully!");
      navigate(LOGIN_ROUTE);
    },
    onError: (error: Error) => {
      toast.error(error.message);
      console.error(error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const { data: profileData, refetch: refetchProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await api.get(API_CONFIG.endpoints.auth.getProfile);
      return response.data;
    },
    enabled: !!localStorage.getItem("token"),
    staleTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  return {
    signUpMutation,
    isLoading: signUpMutation.isPending,
    loginMutation,
    isLoginLoading: loginMutation.isPending,
    logoutMutation,
    isLogoutLoading: logoutMutation.isPending,
    handleLogout,
    profileData,
    refetchProfile,
  };
};
