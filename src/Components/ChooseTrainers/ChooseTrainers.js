import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";

const ChooseTrainers = ({ setTrainer }) => {
	const [trainerIndex, setTrainerIndex] = useState();
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(`${BASE_URL}/Trainer`);
				setData(response?.data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, []);
	const pic = [
		"https://i.ibb.co/7zB46ZT/Screen-Shot-2023-09-26-at-20-07-29.png",
		"https://i.ibb.co/FqLp9b9/Screen-Shot-2023-09-26-at-19-55-06.png",
		"https://i.ibb.co/b7Fj8Cq/Screen-Shot-2023-09-26-at-19-52-18.png",
	];
	return (
		<div style={{ marginTop: "5%" }}>
			<div
				style={{
					textAlign: "center",
					fontWeight: "Bold",
					fontSize: "30px",
					color: "#4d4b4b",
				}}
			>
				Choose{" "}
				<span
					style={{
						backgroundColor: "#007CFF",
						padding: "10px",
						borderRadius: "20px",
						color: "#ffffff",
					}}
				>
					Trainer
				</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "3%",
				}}
			>
				{data.map((element, index) => (
					<div
						style={{
							width: "400px",
							borderRadius: "10px",
							border: `2px solid ${
								trainerIndex === index ? "#007CFF" : "#EBE9E6"
							}`,
							backgroundColor: "#FFFFFF",
						}}
						onClick={() => {
							setTrainerIndex(index);
							setTrainer(element._id);
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								marginTop: "1%",
							}}
						>
							<img
								src={pic[index]}
								width={200}
								height={200}
								style={{ borderRadius: "10px" }}
							/>
						</div>
						<div
							style={{
								fontWeight: "Bold",
								fontSize: "20px",
								textAlign: "center",
								marginTop: "1%",
							}}
						>
							{element.name}
						</div>
						<div
							style={{
								padding: "10px",
								color: "#727272",
								fontSize: "20px",
								textAlign: "center",
							}}
						>
							{element.schedule}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ChooseTrainers;
