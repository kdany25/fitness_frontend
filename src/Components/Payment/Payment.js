import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
	const [data, setData] = useState([]);
	async function fetchData() {
		try {
			const response = await axios.get(`${BASE_URL}/Payment`);
			setData(response?.data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);

	const deleteTrainee = async (trainerId, traineeId) => {
		try {
			const res = await axios.delete(
				`${BASE_URL}/Trainer/${trainerId}/trainees/${traineeId}`
			);
			if (res.status === 200) {
				toast.success("trainee is removed from class");
				fetchData();
			}
		} catch (error) {
			toast.error("failed");
		}
	};

	const deletePayment = async (id, trainerId, traineeId) => {
		try {
			const res = await axios.delete(`${BASE_URL}/Payment/${id}`);
			if (res.status === 200) {
				toast.success("deleted successfully");
				deleteTrainee(trainerId, traineeId);
				fetchData();
			}
		} catch (error) {
			toast.error("failed");
		}
	};

	const columns = [
		{
			name: "Name",
			cell: (row) => (
				<div
					style={{
						display: "flex",
						gap: "5%",
						width: "100%",
						marginTop: "5%",
					}}
				>
					<div>
						<img
							src="https://i.ibb.co/T0KvGhJ/5989813.jpg"
							width={60}
							height={60}
							style={{ borderRadius: "50%" }}
						/>
					</div>
					<div style={{ marginTop: "2%" }}>
						<div
							style={{
								fontSize: "16px",
								fontWeight: "bold",
								color: "001E00",
							}}
						>
							{row.name}
						</div>
						<div style={{ color: "#A3A5BB", marginTop: "5%" }}>
							{" "}
							{row._id}
						</div>
					</div>
				</div>
			),
		},

		{
			name: "Package",
			cell: (row) => (
				<div style={{ width: "70%" }}>
					<div
						style={{
							borderRadius: "10px",
							textAlign: "center",
							backgroundColor: "#D9F3EA",
						}}
					>
						<div
							style={{
								padding: "10%",
								color: "#67C7A3",
								fontWeight: "bold",
							}}
						>
							{row.package}
						</div>
					</div>
				</div>
			),
		},
		{
			name: "Days remaining",
			cell: (row) => (
				<div style={{ width: "70%" }}>
					<div
						style={{
							borderRadius: "10px",
							textAlign: "center",
							backgroundColor: "#E3FCFF",
						}}
					>
						<div
							style={{
								padding: "10%",
								color: "#00E0FF",
								fontWeight: "bold",
							}}
						>
							{Math.floor(
								(new Date(row.endingDate) - new Date()) /
									(1000 * 3600 * 24)
							)}
						</div>
					</div>
				</div>
			),
		},
		{
			name: "Action",
			cell: (row) => (
				<div style={{ width: "100%", display: "flex", gap: "10px" }}>
					<div
						style={{
							borderRadius: "10px",
							textAlign: "center",
							backgroundColor: "#f2b3c4",
							width: "50%",
						}}
						onClick={() =>
							deletePayment(row._id, row.trainerId, row.traineeId)
						}
					>
						<div
							style={{
								padding: "10%",
								color: "red",
								fontWeight: "bold",
							}}
						>
							Delete
						</div>
					</div>
				</div>
			),
		},
	];

	return (
		<div style={{ marginRight: "2%", marginTop: "2%" }}>
			<ToastContainer />
			<div
				style={{
					fontSize: "20px",
					fontWeight: "bold",
					color: "#383838",
				}}
			>
				Payment
			</div>

			<DataTable columns={columns} data={data || []}></DataTable>
		</div>
	);
};

export default Payment;
