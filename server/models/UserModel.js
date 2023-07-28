import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    accessToken: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
