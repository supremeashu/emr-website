// src/pages/CreateTeamPage.js
import React, { useState, useEffect } from "react";
import CreateTeam from "../components/CreateTeam";

const CreateTeamPage = () => {
	const [teams, setTeams] = useState([]);

	// Load teams from Local Storage on mount
	useEffect(() => {
		const storedTeams = JSON.parse(localStorage.getItem("teams")) || [];
		setTeams(storedTeams);
	}, []);

	// Save teams to Local Storage whenever teams state changes
	useEffect(() => {
		localStorage.setItem("teams", JSON.stringify(teams));
	}, [teams]);

	const addTeam = (team) => {
		setTeams([...teams, team]);
	};

	return (
		<div className="flex justify-center">
			<CreateTeam addTeam={addTeam} />
		</div>
	);
};

export default CreateTeamPage;
