import { instance } from "common/api/commonApi"

export const authApi = {
  register: (arg: ArgRegisterType) => {
    return instance.post<RegisterResponseType>("auth/register", arg)
  }
}

export type ArgLoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type ArgRegisterType = Omit<ArgLoginType, 'rememberMe'>

export type ProfileType = {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;

  token: string;
  tokenDeathTime: number;
}

export type RegisterResponseType = {
  addedUser: Omit<ProfileType, 'token' | 'tokenDeathTime'>
}