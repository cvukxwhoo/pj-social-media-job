import axios from "axios";
import { useNavigate } from "react-router-dom";

const fecthtoken = async () => {
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
      console.log(response.data);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }
};
export { fecthtoken };
