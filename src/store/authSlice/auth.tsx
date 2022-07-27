import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		Login: (state, action) => {
			state.user = action.payload;
		},
		Logout: state => {
			state.user = null;
		},
	},
});

export const { Login, Logout } = authSlice.actions;
export default authSlice.reducer;
