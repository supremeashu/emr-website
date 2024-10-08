// src/pages/TeamsPage.js
import React, { useState, useEffect } from "react";
import TeamList from "../components/TeamList";

const TeamsPage = () => {
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

	const handleJoin = (teamId, member) => {
		setTeams(
			teams.map((team) => {
				if (team.id === teamId && team.members.length < 4) {
					return { ...team, members: [...team.members, member] };
				}
				return team;
			})
		);
	};

	return (
		<div>
			<TeamList teams={teams} handleJoin={handleJoin} />
		</div>
	);
};

export default TeamsPage;
