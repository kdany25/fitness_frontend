import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
	SideBarContainer,
	MenuHolder,
	MenuList,
	HrefLinks,
	linkItems,
} from "./SideBarStyles";
import Image from "../../assets/burberr.png";
import { AiOutlineLogout } from "react-icons/ai";
import { logOutManager } from "../../Helpers/ApiCalls";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function SideBarManager() {
	const states = useSelector((state) => state.Manager);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClick = (e) => {
		logOutManager(states, dispatch);
		navigate("/");
	};
	return (
		<SideBarContainer style={{ width: "250px" }}>
			<img src={Image} />

			<MenuHolder>
				<MenuList>
					<Link to="/" className="link">
						<li style={linkItems}>
							<HrefLinks
								style={{
									border: "2px solid #2245e4",
									padding: "20px",
									borderRadius: "10px",
									backgroundColor: "#eaeefa",
									color: "#2245e4",
								}}
							>
								<FaUserAlt color="#2245e4" />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Trainers
								</span>
							</HrefLinks>
						</li>
					</Link>

					<Link to="/addTrainer" className="link">
						<li style={linkItems}>
							<HrefLinks>
								<AiOutlineUserAdd />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Add trainer
								</span>
							</HrefLinks>
						</li>
					</Link>
					<Link to="/addManager" className="link">
						<li style={linkItems}>
							<HrefLinks>
								<AiOutlineUserAdd />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Add Manager
								</span>
							</HrefLinks>
						</li>
					</Link>
					<Link to="/trainees" className="link">
						<li style={linkItems}>
							<HrefLinks>
								<AiOutlineUserAdd />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Trainees
								</span>
							</HrefLinks>
						</li>
					</Link>
					<Link to="/payment" className="link">
						<li style={linkItems}>
							<HrefLinks>
								<GiMoneyStack />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Payment
								</span>
							</HrefLinks>
						</li>
					</Link>
				</MenuList>
			</MenuHolder>
			<hr
				style={{
					borderTop: "1px solid #ebeae8",
					width: "80%",
				}}
			/>

			<div style={{ marginTop: "38vh" }} onClick={() => handleClick()}>
				<div
					style={{
						display: "flex",
						borderRadius: "10px",
						backgroundColor: "#2245e4",
						padding: "20px",
					}}
				>
					<AiOutlineLogout
						color="white"
						style={{
							marginTop: "1%",
							marginLeft: "8%",
							marginRight: "2%",
						}}
					/>
					<div style={{ fontWeight: "bold", color: "white" }}>
						Logout
					</div>
				</div>
			</div>
		</SideBarContainer>
	);
}

export default SideBarManager;
