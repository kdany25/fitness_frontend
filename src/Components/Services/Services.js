import React, { useState } from "react";

const Services = () => {
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);

	const boxStyle = {
		width: "400px",
		backgroundColor: "#ffffff",
		boxShadow: "0px 0px 10px 0px #d4d4d4",
		transition: "transform 0.3s ease",
		borderRadius: "10px",
	};
	const boxStyle1 = {
		...boxStyle,
		transform: isHovered1 ? "scale(1.1)" : "scale(1)", // Scale box 2
	};
	const boxStyle2 = {
		...boxStyle,
		transform: isHovered2 ? "scale(1.1)" : "scale(1)", // Scale box 2
	};

	const boxStyle3 = {
		...boxStyle,
		transform: isHovered3 ? "scale(1.1)" : "scale(1)", // Scale box 3
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
				Our{" "}
				<span
					style={{
						backgroundColor: "#000000",
						padding: "10px",
						borderRadius: "20px",
						color: "#ffffff",
					}}
				>
					Services
				</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "3%",
				}}
			>
				<div
					style={isHovered1 ? boxStyle1 : boxStyle1}
					onMouseEnter={() => setIsHovered1(true)}
					onMouseLeave={() => setIsHovered1(false)}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/0JrGX9k/Screen-Shot-2023-09-26-at-19-04-21.png"
							width={200}
							height={150}
						/>
					</div>
					<div
						style={{
							fontWeight: "Bold",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						Personal Training
					</div>
					<div style={{ padding: "20px", color: "#727272" }}>
						Our certified trainers offer personalized workout plans,
						expert exercise guidance, and nutritional advice.
						Whether you aim to lose weight, build muscle, or enhance
						fitness, our personal training sessions efficiently help
						you reach goals.
					</div>
				</div>

				<div
					style={isHovered2 ? boxStyle2 : boxStyle}
					onMouseEnter={() => setIsHovered2(true)}
					onMouseLeave={() => setIsHovered2(false)}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/p35LyN0/personall.png"
							width={200}
							height={150}
						/>
					</div>
					<div
						style={{
							fontWeight: "Bold",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						Group Training
					</div>
					<div style={{ padding: "20px", color: "#727272" }}>
						Experience the energy of our diverse group fitness
						classes, including HIIT and dance-based workouts. Join
						our supportive community to have fun, make friends, and
						achieve your fitness goals.
					</div>
				</div>

				<div
					style={isHovered3 ? boxStyle3 : boxStyle}
					onMouseEnter={() => setIsHovered3(true)}
					onMouseLeave={() => setIsHovered3(false)}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/fxVy44d/yoga.jpg"
							width={200}
							height={150}
						/>
					</div>
					<div
						style={{
							fontWeight: "Bold",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						Yoga Training
					</div>
					<div style={{ padding: "20px", color: "#727272" }}>
						Discover the mind-body connection through our diverse
						yoga and mindfulness classes. Our skilled instructors
						guide you in various styles like Vinyasa, Hatha, and Yin
						to boost strength, flexibility, and inner peace
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
