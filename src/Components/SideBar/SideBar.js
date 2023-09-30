import React from "react";
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
import { logOutUserTrainer } from "../../Helpers/ApiCalls";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function SideBar() {
	const states = useSelector((state) => state.Trainer);
	const dispatch = useDispatch();
	const handleClick = (e) => {
		logOutUserTrainer(states, dispatch);
	};
	return (
		<SideBarContainer style={{ width: "250px" }}>
			<img src={Image} />

			<MenuHolder>
				<MenuList>
					<Link to="/" className="link">
						<li style={linkItems}>
							<HrefLinks>
								<FaHome />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Home
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

			<div style={{ marginTop: "63vh" }} onClick={() => handleClick()}>
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

export default SideBar;
// AiOutlineLogout
