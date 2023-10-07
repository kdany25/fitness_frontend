import React, { useState } from "react";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";

const box = {
	width: "22%",
	borderRadius: "10px",
	padding: "10px",
	position: "relative",
	transition: "transform 0.3s ease",
};

const Offers = () => {
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);
	const [isHovered4, setIsHovered4] = useState(false);

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
					Offers
				</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "5%",
				}}
			>
				{/* one one */}
				<div
						style={{
							...box,
							background:
								"linear-gradient(to right, white, black)",
							boxShadow: "0px 0px 10px 0px  #000",
							transform: isHovered4 ? "scale(1.1)" : "scale(1)",
						}}
						onMouseEnter={() => setIsHovered4(true)}
						onMouseLeave={() => setIsHovered4(false)}
					>
						<div
							style={{
								textAlign: "center",
								marginTop: "10%",
								color: "#333333",
								fontSize: "20px",
								fontWeight: "Bold",
							}}
						>
							A day
						</div>
						<div
							style={{
								textAlign: "center",
								marginTop: "1%",
								color: "#333333",
							}}
						>
							{" "}
							<span
								style={{ fontSize: "40px", fontWeight: "Bold" }}
							>
								$2
							</span>
						</div>
						<div
							style={{
								marginTop: "10%",
								fontWeight: "bold",
								color: "#333333",
							}}
						>
							<div style={{ display: "flex", marginTop: "3%" }}>
								<RxCheckCircled
									style={{ color: "#333333" }}
									size={24}
								/>
								<div
									style={{
										marginLeft: "1%",
										fontSize: "24px",
									}}
								>
									1 Day
								</div>
							</div>
							<div style={{ display: "flex", marginTop: "3%" }}>
								<RxCheckCircled
									style={{ color: "#333333" }}
									size={24}
								/>
								<div
									style={{
										marginLeft: "1%",
										fontSize: "24px",
									}}
								>
									Fitness
								</div>
							</div>
							<div style={{ display: "flex", marginTop: "3%" }}>
								<RxCrossCircled size={24} />
								<div
									style={{
										marginLeft: "1%",
										fontSize: "24px",
									}}
								>
									Massage
								</div>
							</div>
							<div style={{ display: "flex", marginTop: "3%" }}>
								<RxCrossCircled size={24} />
								<div
									style={{
										marginLeft: "1%",
										fontSize: "24px",
									}}
									Ï
								>
									Yoga
								</div>
							</div>
						</div>
					</div>
				{/* one */}
				<div
					style={{
						...box,
						background:
							"linear-gradient(to right, #FFCBB2, #8B4513)",
						boxShadow: "0px 0px 10px 0px  #8B4513",
						transform: isHovered1 ? "scale(1.1)" : "scale(1)",
					}}
					onMouseEnter={() => setIsHovered1(true)}
					onMouseLeave={() => setIsHovered1(false)}
				>
					<div
						style={{
							textAlign: "center",
							marginTop: "10%",
							color: "#333333",
							fontSize: "20px",
							fontWeight: "Bold",
						}}
					>
						Bronze
					</div>
					<div
						style={{
							textAlign: "center",
							marginTop: "1%",
							color: "#333333",
						}}
					>
						{" "}
						<span style={{ fontSize: "40px", fontWeight: "Bold" }}>
							$10
						</span>
					</div>
					<div
						style={{
							marginTop: "10%",
							fontWeight: "bold",
							color: "#333333",
						}}
					>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#333333" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								1 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#333333" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Yoga
							</div>
						</div>
					</div>
				</div>

				{/* two */}

				<div
					style={{
						...box,
						background:
							"linear-gradient(to right, #f2f2f2, #A9A9A9)",
						boxShadow: "0px 0px 10px 0px  #A9A9A9",
						transform: isHovered2 ? "scale(1.1)" : "scale(1)",
					}}
					onMouseEnter={() => setIsHovered2(true)}
					onMouseLeave={() => setIsHovered2(false)}
				>
					<div
						style={{
							textAlign: "center",
							marginTop: "10%",
							color: "#708090",
							fontSize: "20px",
							fontWeight: "Bold",
						}}
					>
						Silver
					</div>
					<div
						style={{
							textAlign: "center",
							marginTop: "1%",
							color: "#708090",
						}}
					>
						{" "}
						<span style={{ fontSize: "40px", fontWeight: "Bold" }}>
							$30
						</span>
					</div>
					<div
						style={{
							marginTop: "10%",
							color: "#708090",
							fontWeight: "bold",
						}}
					>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#708090" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								2 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#708090" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#708090" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} />
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Yoga
							</div>
						</div>
					</div>
				</div>

				{/* three */}

				<div
					style={{
						...box,
						background:
							"linear-gradient(to right, #F7EF80, #DAA520)",
						boxShadow: "0px 0px 10px 0px  #DAA520",
						transform: isHovered3 ? "scale(1.1)" : "scale(1)",
					}}
					onMouseEnter={() => setIsHovered3(true)}
					onMouseLeave={() => setIsHovered3(false)}
				>
					<div
						style={{
							textAlign: "center",
							marginTop: "10%",
							color: "#8B4513",
							fontSize: "20px",
							fontWeight: "Bold",
						}}
					>
						Gold
					</div>
					<div
						style={{
							textAlign: "center",
							marginTop: "1%",

							color: "#8B4513",
						}}
					>
						{" "}
						<span style={{ fontSize: "40px", fontWeight: "Bold" }}>
							$50
						</span>
						/mo
					</div>
					<div
						style={{
							marginTop: "10%",
							color: "#8B4513",
							fontWeight: "bold",
						}}
					>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#8B4513" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								3 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#8B4513" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#8B4513" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled
								style={{ color: "#8B4513" }}
								size={24}
							/>
							<div style={{ marginLeft: "1%", fontSize: "24px" }}>
								Yoga
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offers;
