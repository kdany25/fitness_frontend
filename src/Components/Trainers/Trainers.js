import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";

const Trainers = () => {
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
	const box = {
		width: "23.5%",
		borderRadius: "10px",
		backgroundColor: "#FFFFFF",
		boxShadow: "0px 0px 10px 0px #d4d4d4",
		transition: "transform 0.3s ease",
	};

	return (
		<div>
			<div
				style={{
					textAlign: "center",
					fontWeight: "Bold",
					fontSize: "30px",
				}}
			>
				Meet Our{" "}
				<span
					style={{
						backgroundColor: "#000000",
						padding: "10px",
						borderRadius: "20px",
						color: "#ffffff",
					}}
				>
					Trainers
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
						style={
							isHovered === index
								? { ...box, transform: "scale(1.1)" }
								: box
						}
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
								height={150}
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

export default Trainers;
