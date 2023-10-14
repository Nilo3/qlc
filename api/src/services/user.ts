import UserModel from "../models/user";
import { User } from "../interfaces/user.interface";

const interUser = async (user: User) => {
  const responseInsert = await UserModel.create(user);
  return responseInsert;
};

const getUsers = async () => {
  const responseUsers = await UserModel.find({});
  return responseUsers;
};

const getUser = async (id: string) => {
  const responseUsers = await UserModel.findOne({ _id: id });
  return responseUsers;
};

const updateUser = async (id: string, data: User) => {
  const response = await UserModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return response;
};

export { interUser, getUsers, getUser, updateUser };
