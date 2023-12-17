import UserModel from "../Models/user.js";

const loginController = {
  // Duyệt POST Login
  postLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({
          message: "Please provide a username and password",
        });
        return;
      }
      const userLogin = await UserModel.findOne({ email, password });
      if (!userLogin) {
        res.status(400).json({
          message: "User or password not right",
        });
        return;
      } else {
        res.status(200).json({
          message: "User logged in successfully",
          data: userLogin,
        });
        return;
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  // GET ALL Login
  getAllLogin: async (req, res) => {
    try {
      const getUserLogin = req.body;
      const AllUserLoginSuccess = await UserModel.find(getUserLogin);
      res.status(200).json({
        message: "Users retrieved successfully",
        data: AllUserLoginSuccess,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
export default loginController;