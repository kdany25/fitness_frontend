import React from "react";
import { useSelector } from "react-redux";

const TrainerNavBar = () => {
	const trainer = useSelector((state) => state?.Trainer?.currentUser);
	return (
		<div
			style={{
				marginTop: "2%",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div style={{ fontSize: "24px", fontWeight: "bold", width: "30%" }}>
				Welcome {trainer.name} 👋🏽
			</div>
			<div style={{ marginRight: "2%" }}>
				<img
					src="https://i.ibb.co/b7Fj8Cq/Screen-Shot-2023-09-26-at-19-52-18.png"
					width={50}
					height={50}
					style={{ borderRadius: "50%" }}
				/>
			</div>
		</div>
	);
};

export default TrainerNavBar;
