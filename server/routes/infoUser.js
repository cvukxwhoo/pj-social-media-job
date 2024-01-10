import express from "express";

// middleware
import middlewares from "../middlewares/index.js";

// controller
import infoUserController from "../controllers/infoUserController.js";

const infoUserRouter = express.Router();

// infoUser Router

infoUserRouter.put("/", middlewares.infoUser, infoUserController.putInfoUser);

infoUserRouter.post("/", middlewares.infoUser, infoUserController.getInfoUser);
infoUserRouter.get(
  "/option",
  middlewares.infoUser,
  infoUserController.getOptionUser
);

export default infoUserRouter;
