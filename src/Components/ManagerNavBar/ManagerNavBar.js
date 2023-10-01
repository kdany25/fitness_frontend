import React from "react";
import { useSelector } from "react-redux";

const ManagerNavBar = () => {
	const manager = useSelector((state) => state?.Manager?.currentUser);
	return (
		<div
			style={{
				marginTop: "2%",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div style={{ fontSize: "24px", fontWeight: "bold", width: "30%" }}>
				Welcome {manager?.name} 👋🏽
			</div>
			<div style={{ marginRight: "2%" }}>
				<img
					src="https://i.ibb.co/v1nvvZm/2953998.jpg"
					width={50}
					height={50}
					style={{ borderRadius: "50%" }}
				/>
			</div>
		</div>
	);
};

export default ManagerNavBar;
