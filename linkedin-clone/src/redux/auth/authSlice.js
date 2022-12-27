import { createSlice } from "@reduxjs/toolkit";
// import {
// 	logInUser,
// 	logOutUser,
// 	reconnectUser,
// 	registerUser,
// 	reLogInUser,
// } from "./authThunk";

const initialState = {
	user: null,
	// username: null,
	// token: null,
	// refreshToken: null,
	// isLoggedIn: false,
	// isFetching: false,
	// errorMessage: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, { payload }) => {
			state.value = payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});
// Actions
export const { login, logout } = authSlice.actions;
// Selectors
export const selectUser = (state) => state.auth.user;
// Reducer
export default authSlice.reducer;
