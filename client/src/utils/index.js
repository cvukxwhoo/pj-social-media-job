import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const fecthtoken = async () => {
  const { login } = useAuth();
  const navigate = useNavigate;
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  } else {
    try {
      const response = await axios.get("http://localhost:3001/token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      login(response.data.data, response.data.token);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }
};
export { fecthtoken };
