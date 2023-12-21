import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const DetailUserSchema = mongoose.Schema({
  idUser: ObjectId,
  userName: String,
  email: String,
  password: String,
  Name: String,
  Phone: String,
  MXH: [Object],
  CV: String,
  LikedJob: [ObjectId],
});
DetailUserSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = null;
    }
  });
  next();
});

const DetailUserModel = mongoose.model("detailUser", DetailUserSchema);

export default DetailUserModel;
