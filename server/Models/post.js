import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
  title: String,
  userName: String, // CompanyName or UserName
  rangeSalary: String,
  location: String,
  workPlace: String, // Hybrid or at office
  vacancies: String,
});

const PostModel = mongoose.model('posts', PostSchema);

export default PostModel;
