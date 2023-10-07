import React, { useState } from "react";
import { JoinLink, LoginBtn, Faeye } from "./style";
import { useDispatch } from "react-redux";
import { login } from "../../Helpers/ApiCalls";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async () => {
		const response = await login(dispatch, { email, password });
		if (response === "Logged In") {
			navigate("/");
		}
	};

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<div style={{ width: "55%", marginTop: "5%" }}>
				<img
					src="https://i.ibb.co/SsyHSrq/3582369.jpg"
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
						Don't you have account ?
					</div>
					<JoinLink
						style={{
							color: "#9A9696",
							backgroundColor: "#ffffff",
							border: "2px solid #DDD3D3",
							fontWeight: "Bold",
							marginLeft: "1%",
						}}
						to="/signUp"
					>
						SIGN UP
					</JoinLink>
				</div>

				<div
					style={{
						fontSize: "35px",
						fontWeight: "Bold",
						marginTop: "5%",
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
				<Link to="/loginTrainer">
					<div
						style={{
							color: "#A3A5BB",
							marginTop: "5%",
							fontSize: "18px",
							marginLeft: "5%",
						}}
					>
						Login As Trainer
					</div>
				</Link>
				<Link to="/loginManager">
					<div
						style={{
							color: "#A3A5BB",
							marginTop: "5%",
							fontSize: "18px",
							marginLeft: "5%",
						}}
					>
						Login as Manager
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Login;
// 007CFF
