import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("authToken");
    localStorage.removeItem("questionCount");
    navigate("/signin");
  };

  return logout;
};
