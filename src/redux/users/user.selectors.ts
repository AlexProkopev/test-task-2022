import { RootState } from "../store";

export const selectUsers = (state: RootState) => state.user.users;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectPosition = (state: RootState) => state.user.positions;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectIsError = (state: RootState) => state.user.isError;
