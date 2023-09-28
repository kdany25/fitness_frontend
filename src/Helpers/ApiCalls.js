import {
	loginFailure,
	loginStart,
	loginSuccess,
	logOutStart,
	logOutSuccess,
	logOutFailure,
} from "../slices/TraineeAuthSlice";

import { apiRequest } from "./requestMethod";

//User login
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await apiRequest.post("TraineeAuth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

//logout
export const logOutUser = async (id, dispatch) => {
	dispatch(logOutStart());
	try {
		dispatch(logOutSuccess("user logout "));
	} catch (err) {
		dispatch(logOutFailure());
	}
};
