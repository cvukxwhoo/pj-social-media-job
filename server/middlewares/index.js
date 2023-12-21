import DetailUserModel from "../Models/DetailUser.js";
import UserModel from "../Models/user.js";

const middlewares = {
  register: async (req, res, next) => {
    const { userName, email, password } = req.body;
    // Must have userName
    if (!userName) {
      res.status(400).json({
        message: "Please provide a username",
      });
      return;
    }
    // Must have email
    if (!email) {
      res.status(400).json({
        message: "Please provide a email",
      });
      return;
    }

    try {
      // check if email already in Database
      const existingEmail = await UserModel.findOne({ email });
      if (existingEmail) {
        res.status(400).json({
          message: "Email already in use",
        });
        return;
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
      return;
    }

    //  Must have password
    if (!password) {
      res.status(400).json({
        message: "Please provide a password",
      });
      return;
    }
    next();
  },

  login: (req, res, next) => {
    const { email, password } = req.body;
    // Must have userName
    if (!email) {
      res.status(400).json({
        message: "Please provide a username",
      });
      return;
    }
    // Must have password
    if (!password) {
      res.status(400).json({
        message: "Please provide a password",
      });
      return;
    }
    next();
  },
  infoUser: async (req, res, next) => {
    // tim objectId ! cập nhật sau :)
    const user = await UserModel.findOne({ email: req.body.email });
    req.id = { idUser: user._id };
    //
    next();
  },
};
export default middlewares;
