import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { TbMassage } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { RxCrossCircled } from "react-icons/rx";
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

const Offers = () => {
	return (
		<div>
			<div
				style={{
					textAlign: "center",
					fontWeight: "Bold",
					fontSize: "30px",
				}}
			>
				Meet Our{" "}
				<span
					style={{
						backgroundColor: "#cfa119",
						padding: "10px",
						borderRadius: "20px",
					}}
				>
					Trainers
				</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "5%",
				}}
			>
				{/* one */}
				<div
					style={{
						border: "1px solid red",
						width: "400px",
						borderRadius: "10px",
						padding: "10px",
						position: "relative",
					}}
				>
					<div
						style={{
							backgroundColor: "red",
							width: "20%",
							borderRadius: "50%",
							position: "absolute",
							top: "-12%",
							right: "45%",
						}}
					>
						<CgGym size={70} style={{ padding: "5%" }} />
					</div>
					<div style={{ textAlign: "center", marginTop: "10%" }}>
						{" "}
						<span style={{ fontSize: "40px", fontWeight: "Bold" }}>
							$10
						</span>
						/mo
					</div>
					<div style={{ marginTop: "10%" }}>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood style={{ color: "red" }} size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								1 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Yoga
							</div>
						</div>
					</div>
					<div
						style={{
							marginTop: "10%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<JoinLink
							style={{
								color: "#202020",
								backgroundColor: "#ffffff",
								border: "1px solid #202020",
							}}
						>
							JOIN NOW
						</JoinLink>
					</div>
				</div>

				{/* two */}

				<div
					style={{
						border: "1px solid red",
						width: "400px",
						borderRadius: "10px",
						padding: "10px",
						position: "relative",
					}}
				>
					<div
						style={{
							backgroundColor: "red",
							width: "20%",
							borderRadius: "50%",
							position: "absolute",
							top: "-12%",
							right: "45%",
						}}
					>
						<TbMassage size={70} style={{ padding: "5%" }} />
					</div>
					<div style={{ textAlign: "center", marginTop: "10%" }}>
						{" "}
						<span style={{ fontSize: "40px", fontWeight: "Bold" }}>
							$30
						</span>
						/mo
					</div>
					<div style={{ marginTop: "10%" }}>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood style={{ color: "red" }} size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								1 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Yoga
							</div>
						</div>
					</div>
					<div
						style={{
							marginTop: "10%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<JoinLink
							style={{
								color: "#202020",
								backgroundColor: "#ffffff",
								border: "1px solid #202020",
							}}
						>
							JOIN NOW
						</JoinLink>
					</div>
				</div>

				{/* three */}

				<div
					style={{
						border: "1px solid red",
						width: "400px",
						borderRadius: "10px",
						padding: "10px",
						position: "relative",
					}}
				>
					<div
						style={{
							backgroundColor: "red",
							width: "20%",
							borderRadius: "50%",
							position: "absolute",
							top: "-12%",
							right: "45%",
						}}
					>
						<GrYoga size={70} style={{ padding: "5%" }} />
					</div>
					<div style={{ textAlign: "center", marginTop: "10%" }}>
						{" "}
						<span style={{ fontSize: "40px", fontWeight: "Bold" }}>
							$10
						</span>
						/mo
					</div>
					<div style={{ marginTop: "10%" }}>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood style={{ color: "red" }} size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								1 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<GrStatusGood size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Yoga
							</div>
						</div>
					</div>
					<div
						style={{
							marginTop: "10%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<JoinLink
							style={{
								color: "#202020",
								backgroundColor: "#ffffff",
								border: "1px solid #202020",
							}}
						>
							JOIN NOW
						</JoinLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offers;
