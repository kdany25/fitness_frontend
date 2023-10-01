import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";

const Payment = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(`${BASE_URL}/Payment`);
				setData(response?.data);
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

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
				Payment
			</div>

			<DataTable columns={columns} data={data || []}></DataTable>
		</div>
	);
};

export default Payment;
