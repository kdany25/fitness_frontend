import React, { useState, useEffect } from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import Banner from "../../Components/Banner/Banner";
import Choose from "../../Components/ChoosePersonal/Choose";
import ChooseTrainers from "../../Components/ChooseTrainers/ChooseTrainers";
import ChooseOffers from "../../Components/ChooseOffers/ChooseOffers";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../Helpers/requestMethod";

const Home = () => {
	const [preference, setPreference] = useState("");
	const [trainer, setTrainer] = useState("");
	const [data, setData] = useState([]);
	const trainee = useSelector((state) => state.Trainee?.currentUser);

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

				<div style={{ marginLeft: "5%", marginRight: "5%" }}>
					<Banner />
					<Choose setPreferences={(value) => setPreference(value)} />
					<ChooseTrainers setTrainer={(value) => setTrainer(value)} />
					<ChooseOffers preference={preference} trainer={trainer} paidTrainee={data} />
				</div>
			</div>
		</div>
	);
};

export default Home;
