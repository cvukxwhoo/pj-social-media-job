import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  userName: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
