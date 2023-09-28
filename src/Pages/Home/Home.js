import React, { useState } from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import Banner from "../../Components/Banner/Banner";
import Choose from "../../Components/ChoosePersonal/Choose";
import ChooseTrainers from "../../Components/ChooseTrainers/ChooseTrainers";
import ChooseOffers from "../../Components/ChooseOffers/ChooseOffers";

const Home = () => {
	const [preference, setPreference] = useState("");
	const [trainer, setTrainer] = useState("");
	
	return (
		<div>
			<div>
				<div style={{ marginLeft: "5%", marginRight: "5%" }}>
					<HomeNavBar />
					<hr
						style={{
							borderTop: "1px solid #ebeae8",
						}}
					/>
				</div>

				<div style={{ marginLeft: "5%", marginRight: "5%" }}>
					<Banner />
					<Choose setPreferences={(value) => setPreference(value)} />
					<ChooseTrainers setTrainer={(value)=> setTrainer(value)} />
					<ChooseOffers preference={preference} trainer={trainer} />
				</div>
			</div>
		</div>
	);
};

export default Home;
