import React, { useEffect, useState } from "react";
import { NavBtn, NavBtnLink } from "./style";
import { BASE_URL } from "../../Helpers/requestMethod";
import { useSelector } from "react-redux";
import { logOutUser } from "../../Helpers/ApiCalls";
import { useDispatch } from "react-redux";

const HomeNavBar = ({data}) => {
	const today = new Date();
	const states = useSelector((state) => state.Trainee);
	const dispatch = useDispatch();
	const handleClick = (e) => {
		logOutUser(states, dispatch);
	};


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
				{data[0] && (
					<div style={{ display: "flex" }}>
						<NavBtn>
							<NavBtnLink
								style={{
									backgroundColor: "black",
									fontWeight: "bold",
								}}
							
							>
								{" "}
								{Math.floor(
									(new Date(data[0]?.endingDate) - today) /
										(1000 * 3600 * 24)
								)}{" "}
								days remaining
							</NavBtnLink>
						</NavBtn>
					</div>
				)}

				<div style={{ display: "flex" }}>
					<NavBtn>
						<NavBtnLink
							style={{
								backgroundColor: "black",
								fontWeight: "bold",
							}}
							to="/"
							onClick={() => handleClick()}
						>
							LogOut
						</NavBtnLink>
					</NavBtn>
				</div>
			</div>
		</div>
	);
};

export default HomeNavBar;
