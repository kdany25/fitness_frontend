import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

export const NavBtnLink = styled.div`
	border-radius: 50px;
	background: #202020;
	white-space: nowrap;
	padding: 10px 22px;
	color: #ededed;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-left: 24px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;

const HomeNavBar = () => {
	return (
		<div>
			<div
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
					}}
				>
					<img
						src="https://i.ibb.co/dQ5bJgP/burberry.png"
						height={100}
						width={100}
					/>
					<div style={{ fontSize: 30, marginTop: "20%" }}>
						<span style={{ fontWeight: "bold" }}>Be</span>Fit
					</div>
				</div>
				<div style={{ display: "flex" }}>
					<ul
						style={{
							listStyleType: "none",
							padding: "0px",
							margin: 0,
							display: "flex",
							marginTop: "4%",
							fontSize: 20,
							color: "#202020",
						}}
					>
						<li
							style={{
								padding: "15px",
								cursor: "pointer",
                fontWeight:'bold'
							}}
						>
							Home
						</li>
						<li
							style={{
								padding: "15px",
								cursor: "pointer",
							}}
						>
							Trainers
						</li>
						<li
							style={{
								padding: "15px",
								cursor: "pointer",
							}}
						>
							Offers
						</li>
						<li
							style={{
								padding: "15px",
								cursor: "pointer",
							}}
						>
							Contact
						</li>
					</ul>

					<NavBtn>
						<NavBtnLink
							style={{
								color: "#202020",
								backgroundColor: "#ffffff",
								border: "1px solid #202020",
							}}
						>
							Register
						</NavBtnLink>
						<NavBtnLink>Login</NavBtnLink>
					</NavBtn>
				</div>
			</div>
		</div>
	);
};

export default HomeNavBar;
