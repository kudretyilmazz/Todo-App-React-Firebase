import { createSlice } from '@reduxjs/toolkit';

interface authState {
	value: boolean;
}

// Define the initial state using that type
const initialState: authState = {
	value: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		Login: state => {
			state.value = true;
		},
		Logout: state => {
			state.value = false;
		},
	},
});

export const { Login, Logout } = authSlice.actions;
export const selectAuth = state => state.auth.value;
export default authSlice.reducer;
