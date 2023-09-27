import React from "react";

const Trainers = () => {
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
						backgroundColor: "#cfa119",
						padding: "10px",
						borderRadius: "20px",
					}}
				>
					Trainers
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
					}}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/7zB46ZT/Screen-Shot-2023-09-26-at-20-07-29.png"
							width={200}
							height={200}
              style={{borderRadius:'50%'}}
						/>
					</div>
					<div
						style={{
							fontWeight: "Bold",
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						Kiki Toure
					</div>
					<div style={{ padding: "10px", color: "#727272" }}>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae
					</div>
				</div>

				<div
					style={{
					
						width: "400px",
						borderRadius: "10px",
					}}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/FqLp9b9/Screen-Shot-2023-09-26-at-19-55-06.png"
              width={200}
							height={200}
              style={{borderRadius:'50%'}}
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
					<div style={{ padding: "10px", color: "#727272" }}>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae
					</div>
				</div>

				<div
					style={{
					
						width: "400px",
						borderRadius: "10px",
					}}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/b7Fj8Cq/Screen-Shot-2023-09-26-at-19-52-18.png"
              width={200}
							height={200}
              style={{borderRadius:'50%'}}
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
					<div style={{ padding: "10px", color: "#727272" }}>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trainers;
