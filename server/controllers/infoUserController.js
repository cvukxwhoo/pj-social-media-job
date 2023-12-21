import DetailUserModel from "../Models/DetailUser.js";

const infoUserController = {
  //Update dữ liệu
  putInfoUser: async (req, res) => {
    try {
      const update = { $set: req.body };
      const NewUpdateInfo = await DetailUserModel.findOneAndUpdate(
        req.id,
        update,
        { new: true }
      );
      if (NewUpdateInfo)
        res.status(201).json({
          message: "Update Succes !",
          data: NewUpdateInfo,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewUpdateInfo,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getInfoUser: async (req, res) => {
    try {
      const NewGetInfo = await DetailUserModel.findOne(req.id);
      if (NewGetInfo)
        res.status(200).json({
          message: "Get Succes !",
          data: NewGetInfo,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewGetInfo,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
export default infoUserController;
