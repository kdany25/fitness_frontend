import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
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

const NewTrainer = () => {
	const [inputs, setInputs] = useState({});
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
				.post(`${BASE_URL}/TrainerAuth/register`, inputs)
				.then((res) => {
					if (res.status === 200 || res.status === 201) {
						toast.success("Created Account successfully");
					}
				})
				.catch((error) => {
					toast.error("failed");
				});
		}
	};
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
			<div>
				<div style={{ fontWeight: "bold" }}>Add new Trainer</div>

				<div style={{ marginTop: "2%" }}>
					<div style={{ fontSize: "15px", fontWeight: "normal" }}>
						Name
					</div>

					<div style={{ marginTop: "1%" }}>
						<input
							placeholder="Type Name"
							style={{
								padding: "20px",
								width: "30%",
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
				<div style={{ marginTop: "1%" }}>
					<div style={{ fontSize: "15px", fontWeight: "normal" }}>
						Email
					</div>

					<div style={{ marginTop: "1%" }}>
						<input
							placeholder="Type Email"
							style={{
								padding: "20px",
								width: "30%",
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
				<div style={{ marginTop: "1%" }}>
					<div style={{ fontSize: "15px", fontWeight: "normal" }}>
						Phone
					</div>

					<div style={{ marginTop: "1%" }}>
						<input
							placeholder="Type Phone"
							style={{
								padding: "20px",
								width: "30%",
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
				<div style={{ marginTop: "1%" }}>
					<div style={{ fontSize: "15px", fontWeight: "normal" }}>
						Schedule
					</div>

					<div style={{ marginTop: "1%" }}>
						<input
							placeholder="Type Schedule"
							style={{
								padding: "20px",
								width: "30%",
								borderRadius: "10px",
								border: "1px solid #A3A5BB",
								fontSize: "16px",
								color: "#A3A5BB",
							}}
							onChange={(e, v) =>
								handleChange("schedule", e.target.value)
							}
						/>
					</div>
				</div>
				<div style={{ marginTop: "1%" }}>
					<div style={{ fontSize: "15px", fontWeight: "normal" }}>
						Password
					</div>

					<div style={{ marginTop: "1%" }}>
						<input
							placeholder="Type Password"
							style={{
								padding: "20px",
								width: "30%",
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
					<div>
						<div className="password-strength-bar">
							<div className={`strength ${strengthLevel}`}>
								{strengthLevel === "weak" && "Weak"}
								{strengthLevel === "medium" && "Medium"}
								{strengthLevel === "strong" && "Strong"}
							</div>
						</div>
					</div>
				</div>
				<div
					style={{
						width: "15%",
						textAlign: "center",
						marginTop: "2%",
					}}
					onClick={() => onSave()}
				>
					<div
						style={{
							display: "flex",
							borderRadius: "10px",
							backgroundColor: "#2245e4",
							padding: "20px",
							textAlign: "center",
						}}
					>
						<div
							style={{
								fontWeight: "bold",
								color: "white",
								textAlign: "center",
							}}
						>
							Save
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewTrainer;
