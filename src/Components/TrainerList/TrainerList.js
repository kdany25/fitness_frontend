import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const TrainerList = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	async function fetchData() {
		try {
			const response = await axios.get(`${BASE_URL}/Trainer`);
			setData(response?.data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);

	const deleteTrainer = async (id) => {
		try {
			const res = await axios.delete(`${BASE_URL}/Trainer/${id}`);
			if (res.status === 200) {
				toast.success("deleted trainer  successfully");
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
							src="https://i.ibb.co/X4mtGMX/6334178.jpg"
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
							{row.phone}
						</div>
					</div>
				</div>
			),
		},

		{
			name: "Email",
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
							{row.email}
						</div>
					</div>
				</div>
			),
		},
		{
			name: "Schedule",
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
							{row.schedule}
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
							backgroundColor: "#D9F3EA",
							width: "50%",
						}}
						onClick={() => navigate(`/updateTrainer/${row._id}`)}
					>
						<div
							style={{
								padding: "10%",
								color: "#67C7A3",
								fontWeight: "bold",
							}}
						>
							Update
						</div>
					</div>

					<div
						style={{
							borderRadius: "10px",
							textAlign: "center",
							backgroundColor: "#f2b3c4",
							width: "50%",
						}}
						onClick={() => deleteTrainer(row._id)}
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
				Trainers
			</div>

			<DataTable columns={columns} data={data || []}></DataTable>
		</div>
	);
};

export default TrainerList;
