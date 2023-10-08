import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext"; // Make sure the path is correct

export default function useRequireAuth() {
  const navigate = useNavigate();
  const { user } = useUser(); // Destructure user from useUser

  useEffect(() => {
    // If user is not authenticated, redirect to signup
    if (!user) {
      navigate("/signup");
    }
  }, [user, navigate]);
}
