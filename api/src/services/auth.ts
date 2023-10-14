import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handler";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ u_email, u_password, u_username }: User) => {
  const checkIs = await UserModel.findOne({ u_email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(u_password); //TODO 12345678
  const registerNewUser = await UserModel.create({
    u_email,
    u_password: passHash,
    u_username,
  });
  //TODO 123456
  return registerNewUser;
};

const loginUser = async ({ u_email, u_password }: Auth) => {
  const checkIs = await UserModel.findOne({ u_email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.u_password; //TODO el encriptado!
  const isCorrect = await verified(u_password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs.u_email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };