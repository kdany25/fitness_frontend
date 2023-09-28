import React, { useState } from "react";

const Choose = ({ setPreferences }) => {
	const [preferenceIndex, setPreferenceIndex] = useState();
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
						backgroundColor: "#007CFF",
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
							width: "300px",
							border: `2px solid ${
								preferenceIndex === 1 ? "#007CFF" : "#A3A5BB"
							}`,
							backgroundColor: "#ffffff",
							borderRadius: "20px",
						}}
						onClick={() => {
							setPreferenceIndex(1);
							setPreferences("Personal session");
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img
								src="https://i.ibb.co/w6c8xsK/3304470.jpg"
								width={100}
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
							width: "300px",
							border: `2px solid ${
								preferenceIndex === 2 ? "#007CFF" : "#A3A5BB"
							}`,
							borderRadius: "20px",
							backgroundColor: "#ffffff",
						}}
						onClick={() => {
							setPreferenceIndex(2);
							setPreferences("Group session");
						}}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<img
								src="https://i.ibb.co/MNm2gzk/5102957.jpg"
								width={100}
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
