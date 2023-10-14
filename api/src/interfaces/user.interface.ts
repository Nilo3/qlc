import { Auth } from "./auth.interface";

export interface User extends Auth {
  u_icon: string;
  u_point: number;
  u_level: number;
  u_experience: number;
  u_createdAt: Date;
  u_username: string;
  u_referralCode: string
}
