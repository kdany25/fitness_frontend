import React from "react";

const ChooseTrainers = () => {
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
				<div
					style={{
						width: "400px",
						borderRadius: "10px",
						border: "2px solid #EBE9E6",
            backgroundColor:'#F6F9FF',
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
							src="https://i.ibb.co/7zB46ZT/Screen-Shot-2023-09-26-at-20-07-29.png"
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
						Kiki Toure
					</div>
					<div
						style={{
							padding: "10px",
							color: "#727272",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						06AM-11AM
					</div>
				</div>

				<div
					style={{
						width: "400px",
						borderRadius: "10px",
						border: "2px solid #007CFF",
            backgroundColor:'#F6F9FF',
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
							src="https://i.ibb.co/FqLp9b9/Screen-Shot-2023-09-26-at-19-55-06.png"
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
						}}
					>
						Ian Robeen
					</div>
					<div
						style={{
							padding: "10px",
							color: "#727272",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						12PM-04Pm
					</div>
				</div>

				<div
					style={{
						width: "400px",
						borderRadius: "10px",
						border: "2px solid #EBE9E6",
            backgroundColor:'#F6F9FF',
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
							src="https://i.ibb.co/b7Fj8Cq/Screen-Shot-2023-09-26-at-19-52-18.png"
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
						}}
					>
						Stephen amell
					</div>
					<div
						style={{
							padding: "10px",
							color: "#727272",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						05PM-11PM
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseTrainers;
