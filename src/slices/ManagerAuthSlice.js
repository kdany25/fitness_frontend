import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "manager",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginManagerStart: (state) => {
			state.isFetching = true;
		},
		loginManagerSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginManagerFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logOutManagerStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		logOutManagerSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = null;
		},
		logOutManagerFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	loginManagerStart,
	loginManagerSuccess,
	loginManagerFailure,
	logOutManagerStart,
	logOutManagerSuccess,
	logOutManagerFailure,
} = userSlice.actions;
export const userIsLogged = (state) => state.user.currentUser;
export default userSlice.reducer;
