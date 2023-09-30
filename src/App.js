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
import SideBarManager from "./Components/SidebarManager/SideBarManager";
import HomeManager from "./Pages/HomeManager/HomeManager";
import LoginManager from "./Pages/LoginManager/LoginManager";
import AddTrainer from "./Pages/AddTrainer/AddTrainer";
import AddManager from "./Pages/AddManager/AddManager";
import PaymentList from "./Pages/Payment/PaymentList";

function App() {
	const trainee = useSelector((state) => state.Trainee?.currentUser);
	const trainer = useSelector((state) => state?.Trainer?.currentUser);
	const manager = useSelector((state) => state?.Manager?.currentUser);

	return (
		<Router>
			<Fragment>
				{!trainee && !trainer && !manager && (
					<Routes>
						<Route path="/" element={<LandingPage />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route exact path="/login" element={<Login />} />
						<Route
							exact
							path="/loginTrainer"
							element={<LoginTrainer />}
						/>
						<Route
							exact
							path="/loginManager"
							element={<LoginManager />}
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
				{manager && !trainee && !trainer && (
					<div className="wholecontainer">
						<SideBarManager />
						<Routes>
							<Route path="/" element={<HomeManager />} />
							<Route
								path="/addTrainer"
								element={<AddTrainer />}
							/>
							<Route
								path="/addManager"
								element={<AddManager />}
							/>
							<Route path="/payment" element={<PaymentList />} />
						</Routes>
					</div>
				)}
			</Fragment>
		</Router>
	);
}

export default App;
