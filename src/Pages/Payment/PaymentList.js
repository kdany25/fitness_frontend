import React from "react";
import TrainerNavBar from "../../Components/TrainerNavBar/TrainerNavBar";
import TraineeList from "../../Components/TraineeList/TraineeList";
import ManagerNavBar from "../../Components/ManagerNavBar/ManagerNavBar";
import Payment from "../../Components/Payment/Payment";

const PaymentList = () => {
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
				<Payment />
			</div>
		</div>
	);
};

export default PaymentList;
