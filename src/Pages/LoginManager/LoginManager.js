import React, { useState } from "react";
import { LoginBtn, Faeye } from "./style";
import { useDispatch } from "react-redux";
import { loginManager } from "../../Helpers/ApiCalls";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginManager = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async () => {
		const response = await loginManager(dispatch, { email, password });
		if (response === "Logged In") {
			navigate("/");
		}
	};
	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<div style={{ width: "55%" }}>
				<img
					src="https://i.ibb.co/v1nvvZm/2953998.jpg"
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
						fontSize: "35px",
						fontWeight: "Bold",
						marginTop: "20%",
						marginLeft: "5%",
					}}
				>
					Welcome Back
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
					Login to your account
				</div>

				<div style={{ marginLeft: "5%", marginTop: "10%" }}>
					<div style={{ fontSize: "20px", fontWeight: "normal" }}>
						Email
					</div>

					<div style={{ marginTop: "2%" }}>
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
							onChange={(e, v) => setEmail(e.target.value)}
						/>
					</div>
				</div>

				<div style={{ marginLeft: "5%", marginTop: "5%" }}>
					<div style={{ fontSize: "20px", fontWeight: "normal" }}>
						Password
					</div>

					<div style={{ marginTop: "2%", position: "relative" }}>
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
				<div style={{ marginLeft: "5%", marginTop: "7%" }}>
					<LoginBtn
						style={{
							color: "#ffffff",
							backgroundColor: "#007CFF",
							fontWeight: "Bold",
						}}
						onClick={() => handleLogin()}
					>
						Login
					</LoginBtn>
				</div>
				<Link to="/login">
					<div
						style={{
							color: "#A3A5BB",
							marginTop: "5%",
							fontSize: "18px",
							marginLeft: "5%",
						}}
					>
						Login As Trainee
					</div>
				</Link>
				<Link to="/loginTrainer">
					<div
						style={{
							color: "#A3A5BB",
							marginTop: "1%",
							fontSize: "18px",
							marginLeft: "5%",
						}}
					>
						Login As Traineer
					</div>
				</Link>
			</div>
		</div>
	);
};

export default LoginManager;
// 007CFF
