import React from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import Banner from "../../Components/Banner/Banner";
import Choose from "../../Components/ChoosePersonal/Choose";
import ChooseTrainers from "../../Components/ChooseTrainers/ChooseTrainers";

const Home = () => {
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
					<Choose />
					<ChooseTrainers />
				</div>
			</div>
		</div>
	);
};

export default Home;
