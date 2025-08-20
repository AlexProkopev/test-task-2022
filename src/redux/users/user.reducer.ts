import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers, User, UserReq } from "./services";

export type StateUser = {
  users: UserReq | null;
  currentUser: User[];
  isLoading: boolean;
  isError: string | null;
};

const initialState: StateUser = {
  users: null,
  currentUser: [],
  isLoading: false,
  isError: null,
};

const userReducerState = createSlice({
  name: "userState",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }: PayloadAction<UserReq>) => {
        state.isLoading = false;
        state.users = payload;
        state.currentUser.push(...payload.users);
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        if(payload) state.isError = payload;
      })
     
  },
});

export const userReducer = userReducerState.reducer;
// export const { addUser } = userReducerState.actions;