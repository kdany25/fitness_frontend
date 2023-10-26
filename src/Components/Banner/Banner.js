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

const Banner = () => {
	return (
		<div>
			<div style={{ display: "flex" }}>
				<div style={{ width: "40%" }}>
					<div style={{ fontSize: "120px", fontWeight: "bold" }}>
						Fitness Fusion
					</div>
					<div
						style={{
							fontSize: "20px",
							maxWidth: "420px",
							lineHeight: "30px",
							color: "#727272",
							marginTop: "2%",
						}}
					>
						Fitness is not just about looking good it's about
						feeling good from the inside out. Don't count the days,
						make days count
					</div>

					<div style={{ marginTop: "5%" }}>
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

					<div style={{ display: "flex", marginTop: "10%" }}>
						<div>
							<div
								style={{ fontSize: "30px", fontWeight: "bold" }}
							>
								90+
							</div>
							<div
								style={{
									fontSize: "18px",
									maxWidth: "150px",

									color: "#727272",
								}}
							>
								Professional Trainers
							</div>
						</div>
						<div>
							<div
								style={{ fontSize: "30px", fontWeight: "bold" }}
							>
								567+
							</div>
							<div
								style={{
									fontSize: "18px",
									maxWidth: "150px",

									color: "#727272",
								}}
							>
								Happily Customers
							</div>
						</div>
						<div>
							<div
								style={{ fontSize: "30px", fontWeight: "bold" }}
							>
								14+
							</div>
							<div
								style={{
									fontSize: "18px",
									maxWidth: "150px",

									color: "#727272",
								}}
							>
								Fitness Workshops
							</div>
						</div>
					</div>
				</div>

				<div
					style={{
						width: "70%",
						display: "flex",
						justifyContent: "center",
						
					}}
				>
					<img
						src="https://i.ibb.co/x3kKMdp/stylish-young-male-athlete-practicing-white-studio-background-portrait-with-shadows-sportive-fit-mod.jpg"
						width={900}
					
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
