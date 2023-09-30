import React from "react";
import ManagerNavBar from "../../Components/ManagerNavBar/ManagerNavBar";
import TrainerList from "../../Components/TrainerList/TrainerList";

const HomeManager = () => {
	return (
		<div style={{ width: "100%" }}>
			<div style={{ marginLeft: "2%" }}>
				<ManagerNavBar />
			</div>
			<hr
				style={{
					borderTop: "1px solid #ebeae8",
					width: "100%",
				}}
			/>
			<div style={{ marginLeft: "2%" }}>
				<TrainerList />
			</div>
		</div>
	);
};

export default HomeManager;
