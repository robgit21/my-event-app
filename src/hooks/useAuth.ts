// src/hooks/useAuth.ts
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useUserStore from "../store/userStore";

const useAuth = () => {
  const { user } = useUserStore();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/login");
    }
  }, [user, history]);

  return !!user;
};

export default useAuth;
