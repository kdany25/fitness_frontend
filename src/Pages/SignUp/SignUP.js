import React, { useState } from "react";
import { SignINLink, SignUpBtn } from "./style";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
import { Navigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./passwordStyle.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #8a8998",
	boxShadow: 24,
	p: 4,
	borderRadius: "20px",
};

const SignUp = () => {
	const [inputs, setInputs] = useState({});
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const [errors, setErrors] = useState([]);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	const handleChange = (key, e) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};
	function isPasswordValid(password) {
		// Define a regular expression pattern that matches the conditions
		const passwordPattern =
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
		console.log("here");
		// Test the password against the pattern
		return passwordPattern.test(password);
	}

	const calculateStrength = (password) => {
		// Define your password strength criteria
		const hasUppercase = /[A-Z]/.test(password);
		const hasLowercase = /[a-z]/.test(password);
		const hasDigit = /[0-9]/.test(password);
		const hasSpecialChar = /[!@#$%^&*]/.test(password);
		const isLengthValid = password?.length >= 8;

		// Calculate the strength level based on conditions
		if (
			isLengthValid &&
			hasUppercase &&
			hasLowercase &&
			hasDigit &&
			hasSpecialChar
		) {
			return "strong";
		} else if (
			isLengthValid &&
			(hasUppercase || hasLowercase || hasDigit || hasSpecialChar)
		) {
			return "medium";
		} else if (
			password?.length > 0 &&
			(hasUppercase || hasLowercase || hasDigit || hasSpecialChar)
		) {
			return "weak";
		}
	};

	const strengthLevel = calculateStrength(inputs.password);

	const onSave = async () => {
		const errors = [];
		if (!inputs.name) {
			errors.push(" Names are required");
		}
		if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
			errors.push("Email is invalid");
		}
		if (!/^\d{10}$/.test(inputs.phone)) {
			errors.push("Phone number must be a 10-digit number");
		}

		if (!isPasswordValid(inputs.password)) {
			errors.push(
				"password must be  8 characters , one capital,  1 special character and a number"
			);
		}
		if (errors.length > 0) {
			setErrors(errors);
			setOpen(true);
		}

		if (errors.length === 0) {
			await axios
				.post(`${BASE_URL}/TraineeAuth/register`, inputs)
				.then((res) => {
					if (res.status === 200 || res.status === 201) {
						toast.success("Created Account successfully");
						setShouldRedirect(true);
					}
				})
				.catch((error) => {
					toast.error("failed");
				});
		}
	};
	if (shouldRedirect) {
		return <Navigate to="/" />;
	}
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div>
						{errors.map((error, index) => (
							<p key={index}>{error}</p>
						))}
					</div>
				</Box>
			</Modal>
			<ToastContainer />
			<div style={{ display: "flex", height: "100vh" }}>
				<div style={{ width: "55%", marginTop: "5%" }}>
					<img
						src="https://i.ibb.co/D1FQwTg/4957136.jpg"
						style={{ width: "100%", height: "100%" }}
					/>{" "}
				</div>

				<div
					style={{
						width: "45%",
						marginRight: "5%",
					}}
				>
					<div
						style={{
							display: "flex",
							marginTop: "5%",
							justifyContent: "flex-end",
						}}
					>
						<div
							style={{
								color: "#A3A5BB",
								marginTop: "1.5%",
								fontSize: "18px",
							}}
						>
							Already have account ?
						</div>
						<SignINLink
							style={{
								color: "#9A9696",
								backgroundColor: "#ffffff",
								border: "2px solid #DDD3D3",
								fontWeight: "Bold",
								marginLeft: "1%",
							}}
							to="/login"
						>
							SIGN IN
						</SignINLink>
					</div>

					<div
						style={{
							fontSize: "35px",
							fontWeight: "Bold",
							marginTop: "5%",
							marginLeft: "5%",
						}}
					>
						Welcome to Befit
					</div>

					<div
						style={{
							color: "#A3A5BB",
							marginTop: "1.5%",
							fontSize: "18px",
							marginLeft: "5%",
							fontWeight: "normal",
						}}
					>
						Register to your account
					</div>

					<div style={{ marginLeft: "5%", marginTop: "5%" }}>
						<div style={{ fontSize: "20px", fontWeight: "normal" }}>
							Name
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								placeholder="Your Name"
								style={{
									padding: "20px",
									width: "70%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("name", e.target.value)
								}
							/>
						</div>
					</div>

					<div style={{ marginLeft: "5%", marginTop: "3%" }}>
						<div style={{ fontSize: "20px", fontWeight: "normal" }}>
							Email
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								placeholder="Your Email"
								style={{
									padding: "20px",
									width: "70%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("email", e.target.value)
								}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "5%", marginTop: "3%" }}>
						<div style={{ fontSize: "20px", fontWeight: "normal" }}>
							Phone
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								placeholder="Your Phone"
								style={{
									padding: "20px",
									width: "70%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("phone", e.target.value)
								}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "5%", marginTop: "3%" }}>
						<div style={{ fontSize: "20px", fontWeight: "normal" }}>
							Password
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								placeholder="Your Password"
								style={{
									padding: "20px",
									width: "70%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("password", e.target.value)
								}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "5%" }}>
						<div className="password-strength-bar">
							<div className={`strength ${strengthLevel}`}>
								{strengthLevel === "weak" && "Weak"}
								{strengthLevel === "medium" && "Medium"}
								{strengthLevel === "strong" && "Strong"}
							</div>
						</div>
					</div>
					<div style={{ marginLeft: "5%", marginTop: "5%" }}>
						<SignUpBtn
							style={{
								color: "#ffffff",
								backgroundColor: "#007CFF",
								fontWeight: "Bold",
							}}
							onClick={() => onSave()}
						>
							Sign Up
						</SignUpBtn>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignUp;
