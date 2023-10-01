import React, { useState } from "react";

const Choose = ({ setPreferences }) => {
	const [preferenceIndex, setPreferenceIndex] = useState();
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
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
				Choose Training {""}
				<span
					style={{
						backgroundColor: "#000000",
						padding: "10px",
						borderRadius: "20px",
						color: "#ffffff",
					}}
				>
					Preference
				</span>
			</div>

			<div style={{ marginTop: "3%" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						gap: "30px",
					}}
				>
					<div
						style={{
							width: "30%",
							border: `1px solid ${
								preferenceIndex === 1 ? "#000000" : "#ffffff"
							}`,
							backgroundColor: "#ffffff",
							borderRadius: "20px",
							transition: "transform 0.3s ease",
							transform: isHovered1 ? "scale(1.1)" : "scale(1)",
							boxShadow: "0px 0px 10px 0px #d4d4d4",
						}}
						onClick={() => {
							setPreferenceIndex(1);
							setPreferences("Personal session");
						}}
						onMouseEnter={() => setIsHovered1(true)}
						onMouseLeave={() => setIsHovered1(false)}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img
								src="https://i.ibb.co/w6c8xsK/3304470.jpg"
								width={200}
							/>
						</div>

						<div
							style={{
								padding: "5%",
								textAlign: "center",
								fontWeight: "Bold",
								fontSize: "24px",
								color: "#4d4b4b",
							}}
						>
							Personal session
						</div>
					</div>
					<div
						style={{
							width: "30%",
							border: `1px solid ${
								preferenceIndex === 2 ? "#000000" : "#ffffff"
							}`,
							borderRadius: "20px",
							backgroundColor: "#ffffff",
							transition: "transform 0.3s ease",
							transform: isHovered2 ? "scale(1.1)" : "scale(1)",
							boxShadow: "0px 0px 10px 0px #d4d4d4",
						}}
						onClick={() => {
							setPreferenceIndex(2);
							setPreferences("Group session");
						}}
						onMouseEnter={() => setIsHovered2(true)}
						onMouseLeave={() => setIsHovered2(false)}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img
								src="https://i.ibb.co/MNm2gzk/5102957.jpg"
								width={200}
							/>
						</div>
						<div
							style={{
								padding: "5%",
								textAlign: "center",
								fontWeight: "Bold",
								fontSize: "24px",
								color: "#4d4b4b",
							}}
						>
							Group session
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Choose;
// https://i.ibb.co/w6c8xsK/3304470.jpg
