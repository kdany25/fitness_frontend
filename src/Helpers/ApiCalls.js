import {
	loginFailure,
	loginStart,
	loginSuccess,
	logOutStart,
	logOutSuccess,
	logOutFailure,
} from "../slices/TraineeAuthSlice";

import {
	loginTrainerFailure,
	loginTrainerStart,
	loginTrainerSuccess,
	logOutTrainerStart,
	logOutTrainerSuccess,
	logOutTrainerFailure,
} from "../slices/TrainerAuthSlice";

import {
	loginManagerStart,
	loginManagerSuccess,
	loginManagerFailure,
	logOutManagerStart,
	logOutManagerSuccess,
	logOutManagerFailure,
} from "../slices/ManagerAuthSlice";

import { apiRequest } from "./requestMethod";

//trainee login
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await apiRequest.post("TraineeAuth/login", user);
		dispatch(loginSuccess(res.data));
		return "Logged In";
	} catch (err) {
		dispatch(loginFailure());
	}
};

//logout trainee
export const logOutUser = async (id, dispatch) => {
	dispatch(logOutStart());
	try {
		dispatch(logOutSuccess("user logout "));
	} catch (err) {
		dispatch(logOutFailure());
	}
};

//User login
export const loginTrainer = async (dispatch, user) => {
	dispatch(loginTrainerStart());
	try {
		const res = await apiRequest.post("TrainerAuth/login", user);
		dispatch(loginTrainerSuccess(res.data));
		return "Logged In";
	} catch (err) {
		dispatch(loginTrainerFailure());
	}
};

//logout
export const logOutUserTrainer = async (id, dispatch) => {
	dispatch(logOutTrainerStart());
	try {
		dispatch(logOutTrainerSuccess("user logout "));
	} catch (err) {
		dispatch(logOutTrainerFailure());
	}
};

//User login
export const loginManager = async (dispatch, user) => {
	dispatch(loginManagerStart());
	try {
		const res = await apiRequest.post("Manager/login", user);
		dispatch(loginManagerSuccess(res.data));
		return "Logged In";
	} catch (err) {
		dispatch(loginManagerFailure());
	}
};

//logout
export const logOutManager = async (id, dispatch) => {
	dispatch(logOutManagerStart());
	try {
		dispatch(logOutManagerSuccess("user logout "));
	} catch (err) {
		dispatch(logOutManagerFailure());
	}
};
