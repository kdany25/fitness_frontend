import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";

const LIstTrainees = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(`${BASE_URL}/Trainee`);
				setData(response?.data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);
	function formatMongoDBDate(dateString) {
		const dateObject = new Date(dateString);
		const formattedDate = dateObject.toISOString().split('T')[0];
		return formattedDate;
	}

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
							src="https://i.ibb.co/GQQLSN2/1608-m00-i125-n001-P-c25-412978636-Active-running-woman-vector-illustration-Energy-jogging-woman-des.jpg"
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
			name: "Email",
			cell: (row) => (
				<div style={{ width: "50%" }}>
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
			name: "Joined At",
			cell: (row) => (
				<div style={{ width: "50%" }}>
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
							{formatMongoDBDate(row.createdAt)}
						</div>
					</div>
				</div>
			),
		},
	];

	return (
		<div style={{ marginRight: "2%", marginTop: "2%" }}>
			<div
				style={{
					fontSize: "20px",
					fontWeight: "bold",
					color: "#383838",
				}}
			>
				Trainee
			</div>

			<DataTable columns={columns} data={data || []}></DataTable>
		</div>
	);
};

export default LIstTrainees;
