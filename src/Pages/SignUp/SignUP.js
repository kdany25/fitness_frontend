import React from "react";
import styled from "styled-components";

export const SignINLink = styled.div`
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

export const SignUpBtn = styled.div`
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

const SignUp = () => {
	return (
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
						/>
					</div>
				</div>
				<div style={{ marginLeft: "5%", marginTop: "5%" }}>
					<SignUpBtn
						style={{
							color: "#ffffff",
							backgroundColor: "#007CFF",
							fontWeight: "Bold",
						}}
					>
						Sign Up
					</SignUpBtn>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
