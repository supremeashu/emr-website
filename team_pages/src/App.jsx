// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateTeamPage from "./pages/CreateTeamPage";
import TeamsPage from "./pages/TeamsPage";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-100">
				<Navbar />
				<div className="container mx-auto p-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/create-team" element={<CreateTeamPage />} />
						<Route path="/teams" element={<TeamsPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
