import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Buffer } from "buffer";
const fecthtoken = async () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    useEffect(() => {
      navigate("/login");
    }, []);
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

// Hàm mã hóa
const encoded = (e) => {
  return Buffer.from(e).toString("base64");
};
// Giải mã
const decoded = (e) => {
  return Buffer.from(e, "base64").toString("utf-8");
};

export { fecthtoken, encoded, decoded };
