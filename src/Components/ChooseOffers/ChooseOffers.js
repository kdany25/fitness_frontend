import React, { useState, useEffect } from "react";
import { GrStatusGood } from "react-icons/gr";
import { CgGym } from "react-icons/cg";
import { TbMassage, TbYoga } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { RxCrossCircled, RxCheckCircled } from "react-icons/rx";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
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
	const handleClose = () => setOpen(false);
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

	const payment = async (time, endDate) => {
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
					datePaid: today,
					time: time,
					endingDate: endDate,
				})
				.then((res) => {
					if (res.status === 200 || res.status === 201) {
						toast.success("Created Account successfully");
						subscribe();
					}
				})
				.catch((error) => {
					toast.error("failed");
				});
		}
	};

	const subscribe = async () => {
		const current = data?.trainee || [];
		current.push({ traineeId: user._id, name: user.name });
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
					color: "#4d4b4b",
				}}
			>
				Our{" "}
				<span
					style={{
						backgroundColor: "#007CFF",
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
						width: "400px",
						borderRadius: "10px",
						padding: "10px",
						position: "relative",
						backgroundColor: "#FFFFFF",
						border: "1px solid #FFE3BB",
					}}
				>
					<div
						style={{
							backgroundColor: "#42B5A6",
							width: "20%",
							borderRadius: "50%",
							position: "absolute",
							top: "-12%",
							right: "45%",
						}}
					>
						<CgGym
							size={70}
							style={{ padding: "5%" }}
							color="#ffffff"
						/>
					</div>
					<div style={{ textAlign: "center", marginTop: "10%" }}>
						{" "}
						<span
							style={{
								fontSize: "40px",
								fontWeight: "Bold",
								color: "#FF3F42",
							}}
						>
							$10
						</span>
						/mo
					</div>
					<div style={{ marginTop: "10%" }}>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								1 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} color="#FF3F42" />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} color="#FF3F42" />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
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
								backgroundColor: "#42B5A6",
								border: "1px solid #FFFFFF",
							}}
							onClick={() =>
								payment("1month", addMonths(today, 1))
							}
						>
							JOIN NOW
						</JoinLink>
					</div>
				</div>

				{/* two */}

				<div
					style={{
						width: "400px",
						borderRadius: "10px",
						padding: "10px",
						position: "relative",
						backgroundColor: "#FFFFFF",
						border: "1px solid #FFE3BB",
					}}
				>
					<div
						style={{
							backgroundColor: "#42B5A6",
							width: "20%",
							borderRadius: "50%",
							position: "absolute",
							top: "-12%",
							right: "45%",
						}}
					>
						<TbMassage
							size={70}
							style={{ padding: "5%" }}
							color="#ffffff"
						/>
					</div>
					<div style={{ textAlign: "center", marginTop: "10%" }}>
						{" "}
						<span
							style={{
								fontSize: "40px",
								fontWeight: "Bold",
								color: "#FF3F42",
							}}
						>
							$30
						</span>
						/mo
					</div>
					<div style={{ marginTop: "10%" }}>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								2 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled size={24} color="#42B5A6" />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCrossCircled size={24} color="#FF3F42" />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
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
								backgroundColor: "#42B5A6",
								border: "1px solid #FFFFFF",
							}}
						>
							JOIN NOW
						</JoinLink>
					</div>
				</div>

				{/* three */}

				<div
					style={{
						width: "400px",
						borderRadius: "10px",
						padding: "10px",
						position: "relative",
						backgroundColor: "#FFFFFF",
						border: "1px solid #FFE3BB",
					}}
				>
					<div
						style={{
							backgroundColor: "#42B5A6",
							width: "20%",
							borderRadius: "50%",
							position: "absolute",
							top: "-12%",
							right: "45%",
						}}
					>
						<TbYoga
							size={70}
							style={{ padding: "5%" }}
							color="#ffffff"
						/>
					</div>
					<div style={{ textAlign: "center", marginTop: "10%" }}>
						{" "}
						<span
							style={{
								fontSize: "40px",
								fontWeight: "Bold",
								color: "#FF3F42",
							}}
						>
							$50
						</span>
						/mo
					</div>
					<div style={{ marginTop: "10%" }}>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								3 Month Subscription
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								Fitness
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
								Massage
							</div>
						</div>
						<div style={{ display: "flex", marginTop: "3%" }}>
							<RxCheckCircled color="#42B5A6" size={24} />
							<div
								style={{
									marginLeft: "1%",
									fontSize: "24px",
									color: "#575555",
								}}
							>
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
								backgroundColor: "#42B5A6",
								border: "1px solid #FFFFFF",
							}}
						>
							JOIN NOW
						</JoinLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseOffers;
