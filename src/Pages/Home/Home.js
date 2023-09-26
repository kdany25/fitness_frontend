import React from "react";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(45deg, #bdd3f5 0%, #ffffff 17%, #ffffff 80%, #ffffff 83%, #fbf4b6 100%)",
				height: "100vh",
			}}
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
	);
};

export default Home;
