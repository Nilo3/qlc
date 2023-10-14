import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    u_username: {
      required: true,
      type: String,
    },
    u_password: {
      required: true,
      type: String,
    },
    u_email: {
      required: true,
      type: String,
      unique: true,
    },
    u_referralCode: {
      type: String,
    },
    u_icon: {
      type: String,
      default: "https://i.ibb.co/WsYqSTd/Poro-lvls.png",
    },
    u_point: {
      type: Number,
      default: 0,
    },
    u_level: {
      type: Number,
      default: 1,
    },
    u_experience: {
      type: Number,
      default: 0,
    },
    u_createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {}
);

const UserModel = model("users", UserSchema);
export default UserModel;
