import React from "react";

const Services = () => {
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
						backgroundColor: "#cfa119",
						padding: "10px",
						borderRadius: "20px",
					}}
				>
					Services
				</span>
			</div>
			<div style={{display:'flex', justifyContent:'space-between', marginTop:'3%'}}>

				<div
					style={{
						border: "1px solid #c9c9c7",
						width: "400px",
						borderRadius: "10px",
					}}
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
					<div style={{ padding: "10px",color: "#727272" }}>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae
					</div>
				</div>

        <div
					style={{
						border: "1px solid #c9c9c7",
						width: "400px",
						borderRadius: "10px",
					}}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/p35LyN0/personall.png"
							width={150}
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
					<div style={{ padding: "10px", color: "#727272" }}>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae
					</div>
				</div>

        <div
					style={{
						border: "1px solid #c9c9c7",
						width: "400px",
						borderRadius: "10px",
					}}
				>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img
							src="https://i.ibb.co/fxVy44d/yoga.jpg"
							width={150}
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
					<div style={{ padding: "10px",color: "#727272" }}>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem
						aperiam, eaque ipsa quae
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
