import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "trainer",
	initialState: {
		currentUser: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginTrainerStart: (state) => {
			state.isFetching = true;
		},
		loginTrainerSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = action.payload;
		},
		loginTrainerFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logOutTrainerStart: (state) => {
			state.isFetching = true;
			state.error = false;
		},
		logOutTrainerSuccess: (state, action) => {
			state.isFetching = false;
			state.currentUser = null;
		},
		logOutTrainerFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
	},
});

export const {
	loginTrainerStart,
	loginTrainerSuccess,
	loginTrainerFailure,
	logOutTrainerStart,
	logOutTrainerSuccess,
	logOutTrainerFailure,
} = userSlice.actions;
export const userIsLogged = (state) => state.user.currentUser;
export default userSlice.reducer;