// src/components/TeamList.js
import React from "react";
import TeamCard from "./TeamCard";

const TeamList = ({ teams, handleJoin }) => {
	const availableTeams = teams.filter((team) => team.members.length < 4);

	return (
		<div className="max-w-5xl mx-auto">
			<h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
				Available Teams to Join
			</h2>
			{availableTeams.length === 0 ? (
				<p className="text-center text-gray-500">
					No available teams to join. Be the first to create one!
				</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{availableTeams.map((team) => (
						<TeamCard key={team.id} team={team} handleJoin={handleJoin} />
					))}
				</div>
			)}
		</div>
	);
};

export default TeamList;
