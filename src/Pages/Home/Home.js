import React, { useState, useEffect } from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import Banner from "../../Components/Banner/Banner";
import Choose from "../../Components/ChoosePersonal/Choose";
import ChooseTrainers from "../../Components/ChooseTrainers/ChooseTrainers";
import ChooseOffers from "../../Components/ChooseOffers/ChooseOffers";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../Helpers/requestMethod";
import { NavBtn, NavBtnLink } from "../../Components/HomeNavBar/style";

const Home = () => {
	const [preference, setPreference] = useState("");
	const [trainer, setTrainer] = useState();
	const [data, setData] = useState([]);
	const trainee = useSelector((state) => state.Trainee?.currentUser);
	const today = new Date();

	useEffect(() => {
		fetch(`${BASE_URL}/Payment/trainee/${trainee._id}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			})
			.catch((error) => console.error("Error fetching data:", error));
	}, [trainee?._id]);

	return (
		<div>
			<div>
				<div style={{ marginLeft: "5%", marginRight: "5%" }}>
					<HomeNavBar data={data} />
					<hr
						style={{
							borderTop: "1px solid #ebeae8",
						}}
					/>
				</div>
				{data[0] && (
					<div
						style={{
							display: "flex",
							marginLeft: "5%",
							marginRight: "5%",
							marginTop:'2%',
							justifyContent:'space-between'
						}}
					>
						<div style={{ display: "flex" }}>
							<NavBtn>
								<NavBtnLink
									style={{
										backgroundColor: "black",
										fontWeight: "bold",
									}}
								>
									Coach:{data[0].trainerName}
								</NavBtnLink>
							</NavBtn>
						</div>
						<div style={{ display: "flex" }}>
							<NavBtn>
								<NavBtnLink
									style={{
										backgroundColor: "black",
										fontWeight: "bold",
									}}
								>
									{" "}
									{Math.floor(
										(new Date(data[0]?.endingDate) -
											today) /
											(1000 * 3600 * 24)
									)}{" "}
									days remaining
								</NavBtnLink>
							</NavBtn>
						</div>
						<div style={{ display: "flex" }}>
							<NavBtn>
								<NavBtnLink
									style={{
										backgroundColor: "black",
										fontWeight: "bold",
									}}
								>
									Time:{data[0].timeofClass}
								</NavBtnLink>
							</NavBtn>
						</div>
						<div style={{ display: "flex" }}>
							<NavBtn>
								<NavBtnLink
									style={{
										backgroundColor: "black",
										fontWeight: "bold",
									}}
								>
									package:{data[0].package}
								</NavBtnLink>
							</NavBtn>
						</div>
					</div>
				)}

				<div style={{ marginLeft: "5%", marginRight: "5%" }}>
					<Banner />
					<Choose setPreferences={(value) => setPreference(value)} />
					<ChooseTrainers setTrainer={(value) => setTrainer(value)} />
					<ChooseOffers
						preference={preference}
						trainer={trainer}
						paidTrainee={data}
					/>
				</div>
			</div>
			<div
				style={{
					display: "flex",

					marginLeft: "5%",
					marginRight: "5%",
					marginTop: "5%",
					justifyContent: "center",
				}}
			>
				<img
					src="https://i.ibb.co/dQ5bJgP/burberry.png"
					height={100}
					width={100}
				/>
				<div style={{ fontSize: 30, marginTop: "2%" }}>
					<span style={{ fontWeight: "bold" }}>Be</span>Fit
				</div>
			</div>
		</div>
	);
};

export default Home;
