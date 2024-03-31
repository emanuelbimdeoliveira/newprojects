import { useNavigate } from "react-router-dom";

export const useNavigateFunction = () => {
  const navigate = useNavigate();
  return { navigate };
};
