import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { loginApiPayload, loginApiResponse } from "./auth.type";
import { signupService } from "../../services/signup.service";

const authRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const LoginApi = createAsyncThunk('Auth/Login', async (payload: loginApiPayload, { rejectWithValue }) => {
    try {
      const response = await authRequest.post<loginApiResponse>('/auth/login', {
        email: payload.email,
        password: payload.password,
      }, {
        withCredentials: true,
      })
      return response.data
    } catch (error) {
      return rejectWithValue(error)
    }
  })
  
  export const signupUserData = createAsyncThunk('signup user',
    async (payload: any, { rejectWithValue }) => {
      try {
        const response = await signupService(payload)
        return response.data
      } catch (error) {
        return rejectWithValue(error)
      }
    })