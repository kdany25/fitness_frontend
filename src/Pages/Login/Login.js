import React from "react";
import styled from "styled-components";

export const JoinLink = styled.div`
	border-radius: 50px;
	background: #202020;
	white-space: nowrap;
	padding: 10px 22px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 100px;
	text-align: center;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;

export const LoginBtn = styled.div`
	border-radius: 50px;
	background: #202020;
	white-space: nowrap;
	padding: 25px 22px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 200px;
	text-align: center;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;

const Login = () => {
	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<div style={{ width: "55%", marginTop:'5%' }}>
        <img src="https://i.ibb.co/SsyHSrq/3582369.jpg" style={{width:'100%', height:'100%'}}/>      </div>

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
						/>
					</div>
				</div>

				<div style={{ marginLeft: "5%", marginTop: "5%" }}>
					<div style={{ fontSize: "20px", fontWeight: "normal" }}>
						Password
					</div>

					<div style={{ marginTop: "2%" }}>
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
						/>
					</div>
				</div>
				<div style={{ marginLeft: "5%", marginTop: "7%" }}>
					<LoginBtn
						style={{
							color: "#ffffff",
							backgroundColor: "#007CFF",
							fontWeight: "Bold",
						}}
					>
						Login
					</LoginBtn>
				</div>
				<div
					style={{
						color: "#A3A5BB",
						marginTop: "5%",
						fontSize: "18px",
						marginLeft: "5%",
					}}
				>
					Forgot password ?
				</div>

			</div>
		</div>
	);
};

export default Login;
// 007CFF