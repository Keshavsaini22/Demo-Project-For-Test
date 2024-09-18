import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersType } from "./user.type";
import { getAllUsersService } from "../../services/users.service";

export const getAllUsers = createAsyncThunk(
  getAllUsersType,
  async ({ pagination }: any, { rejectWithValue }) => {
    const url = `?page=${pagination.page + 1}&limit=${pagination.limit}`;
    try {
      const response = await getAllUsersService(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
