import express from "express";

// middleware
import middlewares from "../middlewares/index.js";

// controller

const checktoken = express.Router();

//routes
checktoken.get("/", middlewares.checkToken, async (req, res) => {
  res.status(200).json({
    data: req.user,
    token,
  });
  return;
});

export default checktoken;
