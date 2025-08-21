import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUser,
  fetchPosition,
  fetchUsers,
} from "./services";
import { Position, StateUser, UserReq } from "@/types/user";



const initialState: StateUser = {
  users: null,
  currentUser: [],
  positions: null,
  isLoading: false,
  isError: null,
  page: 1,
  totalPages: 6,
};

const userReducerState = createSlice({
  name: "userState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchUsers.fulfilled,
        (state, { payload }: PayloadAction<UserReq>) => {
          state.isLoading = false;
          state.users = payload;
          state.currentUser.push(...payload.users);
          state.page = Number(payload.page);
          state.totalPages = Number(payload.total_pages);
        }
      )
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) state.isError = payload;
      })

      .addCase(
        fetchPosition.fulfilled,
        (state, { payload }: PayloadAction<Position>) => {
          state.isLoading = false;
          state.positions = payload;
        }
      )
      .addCase(fetchPosition.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchPosition.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) state.isError = payload;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = [action.payload, ...state.currentUser];
        state.currentUser = state.currentUser.slice(0, 6);
      })
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(createUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        if(typeof payload === 'string') {
          state.isError = payload;
        }
      });
  },
});

export const userReducer = userReducerState.reducer;
