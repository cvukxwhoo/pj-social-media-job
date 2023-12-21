import mongoose from 'mongoose';

// Contact Infomation
const EmployerSchema = mongoose.Schema({
  fullName: String,
  workTitle: String,
  workEmail: String,
  phoneNumber: String,
  companyName: String,
  companyLocation: String,
  websiteUrl: String,
});

const EmployerModel = mongoose.model('employer', EmployerSchema);

export default EmployerModel;
