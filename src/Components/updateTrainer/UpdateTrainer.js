import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const UpdateTrainer = () => {
	const [inputs, setInputs] = useState({});

	const params = useParams();
	const handleChange = (key, e) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};

	//fetching data
	async function fetchData() {
		try {
			const response = await axios.get(
				`${BASE_URL}/Trainer/find/${params.id}`
			);

			setInputs(response?.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	const onUpdate = async () => {
		await axios
			.put(`${BASE_URL}/Trainer/${params.id}`, inputs)
			.then((res) => {
				if (res.status === 200 || res.status === 201) {
					toast.success("Updated successfully");
					fetchData();
				}
			})
			.catch((error) => {
				toast.error("failed");
			});
	};
	return (
		<>
			<ToastContainer />
			<div>
				<div style={{ fontWeight: "bold" }}>Update trainer</div>
				<div style={{ display: "flex" }}>
					<div style={{ marginTop: "1%", width: "50%" }}>
						<div style={{ fontSize: "15px", fontWeight: "normal" }}>
							Name
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								value={inputs?.name}
								style={{
									padding: "20px",
									width: "60%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("name", e.target.value)
								}
							/>
						</div>
					</div>
					<div style={{ marginTop: "1%", width: "50%" }}>
						<div style={{ fontSize: "15px", fontWeight: "normal" }}>
							Email
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								value={inputs?.email}
								style={{
									padding: "20px",
									width: "60%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("email", e.target.value)
								}
							/>
						</div>
					</div>
				</div>
				<div style={{ display: "flex", width: "100%" }}>
					<div style={{ marginTop: "1%", width: "50%" }}>
						<div style={{ fontSize: "15px", fontWeight: "normal" }}>
							Description
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								value={inputs?.description}
								style={{
									padding: "20px",
									width: "60%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("description", e.target.value)
								}
							/>
						</div>
					</div>
					<div style={{ marginTop: "1%", width: "50%" }}>
						<div style={{ fontSize: "15px", fontWeight: "normal" }}>
							Aka
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								value={inputs?.aka}
								style={{
									padding: "20px",
									width: "60%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("aka", e.target.value)
								}
							/>
						</div>
					</div>
				</div>
				<div style={{ display: "flex", width: "100%" }}>
					<div style={{ marginTop: "1%", width: "50%" }}>
						<div style={{ fontSize: "15px", fontWeight: "normal" }}>
							Phone
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								value={inputs?.phone}
								style={{
									padding: "20px",
									width: "60%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("phone", e.target.value)
								}
							/>
						</div>
					</div>
					<div style={{ marginTop: "1%", width: "50%" }}>
						<div style={{ fontSize: "15px", fontWeight: "normal" }}>
							Schedule
						</div>

						<div style={{ marginTop: "1%" }}>
							<input
								value={inputs?.schedule}
								style={{
									padding: "20px",
									width: "60%",
									borderRadius: "10px",
									border: "1px solid #A3A5BB",
									fontSize: "16px",
									color: "#A3A5BB",
								}}
								onChange={(e, v) =>
									handleChange("schedule", e.target.value)
								}
							/>
						</div>
					</div>
				</div>

				<div
					style={{
						width: "15%",
						textAlign: "center",
						marginTop: "2%",
					}}
					onClick={() => onUpdate()}
				>
					<div
						style={{
							display: "flex",
							borderRadius: "10px",
							backgroundColor: "#2245e4",
							padding: "20px",
							textAlign: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								fontWeight: "bold",
								color: "white",
								textAlign: "center",
							}}
						>
							Update
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpdateTrainer;
