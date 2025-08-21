import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, fetchToken, fetchUsersById } from "../instance";
import { Position } from "./user.reducer";
import { UserFormValues } from "@/components/registration/form-schema";
import { PayloadGetUsers, User, UserReq } from "@/types/user";



export const fetchUsers = createAsyncThunk<
  UserReq,
  PayloadGetUsers,
  { rejectValue: string }
>("users/fetchUsers", async ({ page = 1, count = 6 }, thunkApi) => {
  try {
    const response = await axios.get(
      `${baseUrl}users?page=${page}&count=${count}`
    );
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkApi.rejectWithValue(err.message as string);
    }
    return thunkApi.rejectWithValue("An unknown error occurred");
  }
});

export const fetchPosition = createAsyncThunk<
  Position,
  void,
  { rejectValue: string }
>("users/fetchPosition", async (_, thunkApi) => {
  try {
    const response = await axios.get(`${baseUrl}positions`);
    return response.data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      return thunkApi.rejectWithValue(err.message as string);
    }
    return thunkApi.rejectWithValue("An unknown error occurred");
  }
});

export const createUser = createAsyncThunk<
  User,
  UserFormValues
>(
  "user/createUser",
  async (data: UserFormValues, { rejectWithValue }) => {
    try {
      const token = await fetchToken();
      if (!token) throw new Error("No token");

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("position_id", String(data.position_id));
      formData.append("photo", data.photo[0]);

      const response = await axios.post(`${baseUrl}users`, formData, {
        headers: {
          Token: token,
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.data.success) {
        throw new Error("Failed to create user");
      }

      const userId = response.data.user_id;
      const fullUserResponse = await fetchUsersById(String(userId));

      if (!fullUserResponse) {
        throw new Error("Failed to fetch created user");
      }

      return fullUserResponse.user;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message || "Unknown error");
      }
      return rejectWithValue("Unknown error");
    }
  }
);

