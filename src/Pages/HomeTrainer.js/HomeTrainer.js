import React from "react";
import TrainerNavBar from "../../Components/TrainerNavBar/TrainerNavBar";
import TraineeList from "../../Components/TraineeList/TraineeList";

const HomeTrainer = () => {
	return (
		<div style={{ width: "100%" }}>
			<div style={{ marginLeft: "2%" }}>
				<TrainerNavBar />
			</div>
			<hr
				style={{
					borderTop: "1px solid #ebeae8",
					width: "100%",
				}}
			/>
			<div style={{ marginLeft: "2%" }}>
				<TraineeList />
			</div>
		</div>
	);
};

export default HomeTrainer;
