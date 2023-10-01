import React from "react";
import { NavBtn, NavBtnLink } from "./style";

const LandingNavBar = () => {
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
								fontWeight: "bold",
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
							Services
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
							Offer
						</li>
					</ul>

					<NavBtn>
						<NavBtnLink
							style={{
								color: "#202020",
								backgroundColor: "#ffffff",
								border: "1px solid #202020",
							}}
							to="/signUp"
						>
							Register
						</NavBtnLink>
						<NavBtnLink to="/login">Login</NavBtnLink>
					</NavBtn>
				</div>
			</div>
		</div>
	);
};

export default LandingNavBar;
