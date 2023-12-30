import mongoose from "mongoose";

// Contact Infomation
const EmployerSchema = mongoose.Schema({
  avatar: {
    type: String,
    require: true,
  },
  fullName: String,
  workTitle: String,
  workEmail: String,
  phoneNumber: Number,
  companyName: String,
  companyLocation: String,
  websiteUrl: String,
  selectedOption: String,
});

const EmployerModel = mongoose.model("employer", EmployerSchema);

export default EmployerModel;
