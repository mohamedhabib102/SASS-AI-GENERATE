import { useMutation } from "@tanstack/react-query";
import { Login } from "../api/service";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export const useSignIn = () => {
  return useMutation({
    mutationFn: Login,
  });
};