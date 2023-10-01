import React, { useState, useEffect } from "react";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../Helpers/requestMethod";
import { useSelector } from "react-redux";

export const JoinLink = styled.div`
	border-radius: 50px;
	background: #202020;
	white-space: nowrap;
	padding: 10px 22px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	width: 100px;
	text-align: center;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;

const ChooseOffers = ({ preference, trainer }) => {
	const [data, setData] = useState();
	const user = useSelector((state) => state.Trainee.currentUser);
	const [errors, setErrors] = useState([]);
	const [open, setOpen] = useState(false);
	const [isHovered1, setIsHovered1] = useState(false);
	const [isHovered2, setIsHovered2] = useState(false);
	const [isHovered3, setIsHovered3] = useState(false);

	const today = new Date();

	async function fetchData() {
		try {
			const response = await axios.get(
				`${BASE_URL}/Trainer/find/${trainer}`
			);

			setData(response?.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchData();
	}, [trainer]);

	const payment = async (packages, endDate) => {
		const errors = [];
		if (!preference) {
			errors.push(" Choose training preference");
		}
		if (!trainer) {
			errors.push(" Choose Trainer");
		}
		if (errors.length > 0) {
			setErrors(errors);
			setOpen(true);
		}
		if (errors.length === 0) {
			await axios
				.post(`${BASE_URL}/Payment`, {
					traineeId: user._id,
					name: user.name,
					datePaid: today,
					package: packages,
					endingDate: endDate,
				})
				.then((res) => {
					if (res.status === 200 || res.status === 201) {
						toast.success("Created Account successfully");
						subscribe(packages, endDate);
					}
				})
				.catch((error) => {
					toast.error("failed");
				});
		}
	};

	const subscribe = async (packages, endingDate) => {
		const current = data?.trainee || [];
		current.push({
			traineeId: user._id,
			name: user.name,
			phone: user.phone,
			package: packages,
			endingDate: endingDate,
		});
		await axios
			.put(`${BASE_URL}/Trainer/${trainer}`, {
				trainee: current,
			})
			.then((res) => {
				if (res.status === 200 || res.status === 201) {
					toast.success("Subscribed");
				}
			})
			.catch((error) => {
				toast.error("Failed, try again");
			});
	};

	const box = {
		width: "30%",
		borderRadius: "10px",
		padding: "10px",
		position: "relative",
		transition: "transform 0.3s ease",
	};

	function addMonths(date, months) {
		const newDate = new Date(date);
		const currentMonth = newDate.getMonth();
		newDate.setMonth(currentMonth + months);

		return newDate;
	}

	return (
		<div style={{ marginTop: "5%" }}>
			<div
				style={{
					textAlign: "center",
					fontWeight: "Bold",
					fontSize: "30px",
					color: "#000000",
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
					<div
						style={{
							marginTop: "10%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<JoinLink
							style={{
								color: "#FFFFFF",
								backgroundColor: "#303030",
								fontWeight: "bold",
							}}
							onClick={() =>
								payment("Bronze", addMonths(today, 1))
							}
						>
							Join
						</JoinLink>
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
					<div
						style={{
							marginTop: "10%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<JoinLink
							style={{
								color: "#FFFFFF",
								backgroundColor: "#303030",
								fontWeight: "bold",
							}}
							onClick={() =>
								payment("Silver", addMonths(today, 2))
							}
						>
							Join
						</JoinLink>
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
					<div
						style={{
							marginTop: "10%",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<JoinLink
							style={{
								color: "#FFFFFF",
								backgroundColor: "#303030",
								fontWeight: "bold",
							}}
							onClick={() => payment("Gold", addMonths(today, 3))}
						>
							Join
						</JoinLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseOffers;
