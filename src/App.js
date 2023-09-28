import React, { Fragment } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<Router>
			<Fragment>
				<Routes>
					{/* <Route path="/" element={<LandingPage />} /> */}
					<Route path="/" element={<Home />} />

					<Route path="/signUp" element={<SignUp />} />

					<Route exact path="/login" element={<Login />} />
				</Routes>
			</Fragment>
		</Router>
	);
}

export default App;
