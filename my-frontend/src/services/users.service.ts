import axiosInstance from "../config/axios";

export const getAllUsersService=(url: string)=>axiosInstance.get(`/users${url}`);