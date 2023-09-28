import React from "react";
import { NavBtn, NavBtnLink } from "./style";

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
				
          
					<NavBtn>
						<NavBtnLink to="/login">17 days remaining</NavBtnLink>
					</NavBtn>
				</div>
			</div>
		</div>
	);
};

export default HomeNavBar;
