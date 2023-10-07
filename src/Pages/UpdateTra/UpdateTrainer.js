import React from "react";
import ManagerNavBar from "../../Components/ManagerNavBar/ManagerNavBar";
import UpdateTrainer from "../../Components/updateTrainer/UpdateTrainer";

const UpdateTrainers = () => {
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
				<UpdateTrainer />
			</div>
		</div>
	);
};

export default UpdateTrainers;
