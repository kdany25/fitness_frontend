import React, { useState } from "react";
import { LoginBtn } from "../Login/style";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";

const ResetTrainer = () => {
	const [email, setEmail] = useState();

	const onSave = async () => {
		await axios
			.post(`${BASE_URL}/TrainerAuth/check-email`, { email })
			.then((res) => {
				if (res.status === 200 || res.status === 201) {
					toast.success("Reset Email is successful sent");
				}
			})
			.catch((error) => {
				toast.error("failed");
			});
	};

	return (
		<div style={{ display: "flex", height: "100vh" }}>
			<ToastContainer />
			<div style={{ width: "55%", marginTop: "5%" }}>
				<img
					src="https://i.ibb.co/2687DcV/5500661.jpg"
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
					Reset Password
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
					enter your email
				</div>

				<div style={{ marginLeft: "5%", marginTop: "5%" }}>
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
				<div style={{ marginLeft: "5%", marginTop: "7%" }}>
					<LoginBtn
						style={{
							color: "#ffffff",
							backgroundColor: "#007CFF",
							fontWeight: "Bold",
						}}
						onClick={() => onSave()}
					>
						Send Email
					</LoginBtn>
				</div>
			</div>
		</div>
	);
};

export default ResetTrainer;
