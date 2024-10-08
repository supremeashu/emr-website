// src/components/TeamCard.js
import React, { useState } from "react";
import JoinTeamForm from "./JoinTeamForm";

const TeamCard = ({ team, handleJoin }) => {
	const [isJoining, setIsJoining] = useState(false);
	const [message, setMessage] = useState("");

	const onJoin = (member) => {
		handleJoin(team.id, member);
		setMessage("Successfully joined the team!");
		setTimeout(() => setMessage(""), 3000);
		setIsJoining(false);
	};

	return (
		<div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
			<div>
				<h3 className="text-2xl font-semibold text-blue-500 mb-2">
					{team.teamName}
				</h3>
				<p className="text-gray-600 mb-4">Members: {team.members.length} / 4</p>
				<div className="mb-4">
					<h4 className="font-semibold">Team Members:</h4>
					{team.members.length === 0 ? (
						<p className="text-gray-500">No members yet.</p>
					) : (
						<ul className="list-disc list-inside">
							{team.members.map((member, index) => (
								<li key={index}>
									{member.name} ({member.email})
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
			{message && (
				<div className="bg-green-100 text-green-700 p-2 rounded mb-2">
					{message}
				</div>
			)}
			{isJoining ? (
				<JoinTeamForm onJoin={onJoin} onCancel={() => setIsJoining(false)} />
			) : (
				<button
					onClick={() => setIsJoining(true)}
					className={`w-full py-2 px-4 rounded-lg text-white ${
						team.members.length >= 4
							? "bg-gray-400 cursor-not-allowed"
							: "bg-blue-500 hover:bg-blue-600"
					} transition duration-200`}
					disabled={team.members.length >= 4}
				>
					{team.members.length >= 4 ? "Full" : "Join Team"}
				</button>
			)}
		</div>
	);
};

export default TeamCard;
