import { LOGIN, SIGNUP } from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "@/routes/routes";
import { LoginData, SignupData } from "@/types/auth";

export const useAuth = () => {
  const navigate = useNavigate();

  const signUpMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: SignupData) => {
      const response = await fetch(SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Failed to sign up");
      }
      return responseData;
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
      const response = await fetch(LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Failed to log in");
      }
      return responseData;
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

  return {
    signUpMutation,
    isLoading: signUpMutation.isPending,
    loginMutation,
    isLoginLoading: loginMutation.isPending,
  };
};
