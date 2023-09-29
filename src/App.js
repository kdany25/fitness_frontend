import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import LoginTrainer from "./Pages/LoginTrainer/LoginTrainer";
import { useSelector } from "react-redux";
import SideBar from "./Components/SideBar/SideBar";
import HomeTrainer from "./Pages/HomeTrainer.js/HomeTrainer";

function App() {
	const trainee = useSelector((state) => state.Trainee?.currentUser);
	const trainer = useSelector((state) => state?.Trainer?.currentUser);

	return (
		<Router>
			<Fragment>
				{!trainee && !trainer && (
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route exact path="/login" element={<Login />} />{" "}
						<Route
							exact
							path="/loginTrainer"
							element={<LoginTrainer />}
						/>
					</Routes>
				)}

				{trainer && !trainee && (
					<div className="wholecontainer">
						<SideBar />
						<Routes>
							<Route path="/" element={<HomeTrainer />} />
						</Routes>
					</div>
				)}
				{trainee && !trainer && (
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				)}
			</Fragment>
		</Router>
	);
}

export default App;
