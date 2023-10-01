import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";

const ChooseTrainers = ({ setTrainer }) => {
	const [trainerIndex, setTrainerIndex] = useState();
	const [data, setData] = useState([]);
	const [isHovered, setIsHovered] = useState(false);

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
		"https://i.ibb.co/k98d3b8/p1.jpg",
		"https://i.ibb.co/M5XqKRt/shirtless-bodybuilder-holding-dumbbell-shoulder.jpg",
		"https://i.ibb.co/dK0x6Ly/Screen-Shot-2023-10-01-at-11-19-47.png",
		"https://i.ibb.co/0QMV5ZT/p3.jpg",
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
						backgroundColor: "#000000",
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
					flexWrap: "wrap",
					justifyContent: "space-between",
					marginTop: "3%",
				}}
			>
				{data.map((element, index) => (
					<div
						style={{
							borderRadius: "10px",
							border: `1px solid ${
								trainerIndex === index ? "#000000" : "#ffffff"
							}`,
							backgroundColor: "#FFFFFF",
							width: "23.5%",
							boxShadow: "0px 0px 10px 0px #d4d4d4",
							transition: "transform 0.3s ease",
							transform:
								isHovered === index ? "scale(1.1)" : "scale(1)",
						}}
						onClick={() => {
							setTrainerIndex(index);
							setTrainer(element._id);
						}}
						onMouseEnter={() => setIsHovered(index)}
						onMouseLeave={() => setIsHovered(null)}
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
								fontSize: "18px",
								textAlign: "center",
								marginTop: "1%",
							}}
						>
							{element.aka}
						</div>
						<div style={{ padding: "10px", color: "#727272" }}>
							<em>"{element.description}"</em>
						</div>
						<div
							style={{
								padding: "10px",
								color: "#727272",
								fontSize: "16px",
								textAlign: "center",
								fontWeight: "Bold",
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
