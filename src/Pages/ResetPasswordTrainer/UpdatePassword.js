import React, { useState } from "react";
import { LoginBtn } from "../Login/style";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
import { useLocation } from "react-router-dom";
import "../SignUp/passwordStyle.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Faeye = {
	position: "absolute",
	top: "65%",
	right: "28%",
	transform: "translateY(-50%)",
	cursor: "pointer",
};

const UpdatePasswordTrainer = () => {
	const [password, setPassword] = useState();
	const [showPassword, setShowPassword] = useState(false);
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const idParam = searchParams.get("id");
	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	const navigate = useNavigate();

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

	const strengthLevel = calculateStrength(password);

	const onSave = async () => {
		try {
			await axios.post(`${BASE_URL}/TrainerAuth/update-password`, {
				password: password,
				id: idParam,
			});

			toast.success("Password is changed");

			setTimeout(() => {
			  navigate("/login");
			}, 3000);
		} catch (error) {
			toast.error("Failed");
		}
	};

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<ToastContainer />
			<div style={{ width: "55%", marginTop: "5%" }}>
				<img
					src="https://i.ibb.co/K2yMXRk/6310507.jpg"
					style={{ width: "100%", height: "100%" }}
				/>{" "}
			</div>

			<div
				style={{
					width: "45%",
					marginRight: "5%",
					marginTop: "15%",
				}}
			>
				<div
					style={{
						fontSize: "35px",
						fontWeight: "Bold",
						marginTop: "5%",
						marginLeft: "5%",
					}}
				>
					Type new Password
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
					enter your new password
				</div>

				<div
					style={{
						marginLeft: "5%",
						marginTop: "3%",
						position: "relative",
					}}
				>
					<div style={{ fontSize: "20px", fontWeight: "normal" }}>
						Password
					</div>

					<div style={{ marginTop: "1%" }}>
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Your Password"
							style={{
								padding: "20px",
								width: "70%",
								borderRadius: "10px",
								border: "1px solid #A3A5BB",
								fontSize: "16px",
								color: "#A3A5BB",
							}}
							onChange={(e, v) => setPassword(e.target.value)}
						/>
						{showPassword ? (
							<FaEyeSlash
								style={Faeye}
								onClick={handleTogglePassword}
							/>
						) : (
							<FaEye
								style={Faeye}
								onClick={handleTogglePassword}
							/>
						)}
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
				<div style={{ marginLeft: "5%", marginTop: "2%" }}>
					<LoginBtn
						style={{
							color: "#ffffff",
							backgroundColor: "#007CFF",
							fontWeight: "Bold",
						}}
						onClick={() => onSave()}
					>
						Save new password
					</LoginBtn>
				</div>
			</div>
		</div>
	);
};

export default UpdatePasswordTrainer;
