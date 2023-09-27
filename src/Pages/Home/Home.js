import React from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Trainers from "../../Components/Trainers/Trainers";
import Offers from "../../Components/Offers/Offers";

const Home = () => {
	return (
		<div>
			<div
				// style={{
				// 	background:
				// 		"linear-gradient(45deg, #bdd3f5 0%, #ffffff 17%, #ffffff 80%, #ffffff 83%, #fbf4b6 100%)",
				// 	height: "100vh",
				// }}
			>
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
				</div>
			</div>
			<div style={{ marginLeft: "5%", marginRight: "5%",marginTop:'5%' }}>
				<Services />
			</div>
			<div style={{ marginLeft: "5%", marginRight: "5%",marginTop:'5%' }}>
				<Trainers />
			</div>
			<div style={{ marginLeft: "5%", marginRight: "5%",marginTop:'5%' }}>
				<Offers />
			</div>

			<div
					style={{
						display: "flex",
				
						marginLeft: "5%", marginRight: "5%",marginTop:'5%',
						justifyContent:'center'
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
