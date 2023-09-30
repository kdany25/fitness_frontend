import React from "react";
import ManagerNavBar from "../../Components/ManagerNavBar/ManagerNavBar";
import NewTrainer from "../../Components/NewTrainer/NewTrainer";
import NewManager from "../../Components/NewManager/NewManager";

const AddManager = () => {
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
				<NewManager />
			</div>
		</div>
	);
};

export default AddManager;
