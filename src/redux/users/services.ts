import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchToken, instance, setToken } from "../instance";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


const token = await fetchToken();
if (token) {
  setToken({ success: true, token });
}

export type User ={
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    registration_timestamp: number;
    photo: string;
}
export type UserReq = {
  success: boolean;
  total_pages: string;
  total_users: string;
  count: string;
  page: string;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
};

 

export type PayloadGetUsers = {
  page: number;
  count: number;
};

export const fetchUsers = createAsyncThunk<
  UserReq,
  PayloadGetUsers,
  { rejectValue: string }
>("users/fetchUsers", async ({ page = 1, count = 6 }, thunkApi) => {
  try {
    const response = await instance.get(
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
