import React from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

const TraineeList = () => {
	const trainer = useSelector((state) => state?.Trainer?.currentUser);
	const today = new Date();

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
							src="https://i.ibb.co/4W5ntbv/13546.jpg"
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
			name: "Package",
			cell: (row) => (
				<div style={{ width: "100%" }}>
					{row.package === "Gold" && (
						<div
							style={{
								borderRadius: "10px",
								textAlign: "center",
								backgroundColor: "#FFEEDE",
							}}
						>
							<div
								style={{
									padding: "10%",
									color: "#FEA45D",
									fontWeight: "bold",
								}}
							>
								{row.package} Package
							</div>
						</div>
					)}
					{row.package === "Bronze" && (
						<div
							style={{
								borderRadius: "10px",
								textAlign: "center",
								backgroundColor: "#FFE8FA",
							}}
						>
							<div
								style={{
									padding: "10%",
									color: "#FB73DD",
									fontWeight: "bold",
								}}
							>
								{row.package} Package
							</div>
						</div>
					)}
					{row.package === "Silver" && (
						<div
							style={{
								borderRadius: "10px",
								textAlign: "center",
								backgroundColor: "#E1E3FC",
							}}
						>
							<div
								style={{
									padding: "10%",
									color: "#5255EA",
									fontWeight: "bold",
								}}
							>
								{row.package} Package
							</div>
						</div>
					)}
				</div>
			),
		},
		{
			name: "Status",
			cell: (row) => (
				<div style={{ width: "100%" }}>
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
							Paid
						</div>
					</div>
				</div>
			),
		},
		{
			name: "Days",
			cell: (row) => (
				<div style={{ width: "100%" }}>
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
								(new Date(row.endingDate) - today) /
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
				Your Trainees 🏃🏻‍♂️🏃🏼‍♀️{" "}
			</div>

			<DataTable
				columns={columns}
				data={trainer?.trainee || []}
			></DataTable>
		</div>
	);
};

export default TraineeList;
