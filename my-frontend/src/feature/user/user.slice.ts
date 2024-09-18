import { createSlice } from "@reduxjs/toolkit";
import { InitUser } from "../auth/auth.type";
import { getAllUsers } from "./user.action";

type InitialState = {
  users: Array<InitUser>;
  loading: boolean;
  count: number;
  type: string;
};

const initialState: InitialState = {
  users: [],
  loading: false,
  count: 0,
  type: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.rows;
        state.count = action.payload.count;
        state.loading = false;
      })
      .addCase(getAllUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.type = "error";
      });
  },
});

export default userSlice.reducer;
