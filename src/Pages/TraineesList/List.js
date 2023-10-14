import React from "react";
import ManagerNavBar from "../../Components/ManagerNavBar/ManagerNavBar";
import LIstTrainees from "../../Components/ListTrainees/LIstTrainees";

const TraineesList = () => {
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
				<LIstTrainees />
			</div>
		</div>
	);
};

export default TraineesList;
