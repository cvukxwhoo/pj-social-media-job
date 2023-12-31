import DetailUserModel from "../Models/DetailUser.js";
import UserModel from "../Models/user.js";

const registerController = {
  createNewUser: async (req, res) => {
    try {
      // check email existed
      // crypto password
      const newUser = req.body;
      const createNewUser = await UserModel.create(newUser);
      // tạo 1 detailUser với IdUser tương ứng objectId
      const createNewDetailUser = await DetailUserModel.create({
        idUser: createNewUser._id,
        ...req.body,
      });
      //
      {
      }
      res.status(201).json({
        message: "User created successfully",
        data: createNewUser,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getAllRegister: async (req, res) => {
    try {
      const getNewUser = req.body;
      const getAllNewUsers = await UserModel.find(getNewUser);
      res.status(200).json({
        message: "Users retrieved successfully",
        data: getAllNewUsers,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default registerController;
