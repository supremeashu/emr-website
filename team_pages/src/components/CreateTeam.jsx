// src/components/CreateTeam.js
import React, { useState } from "react";

const CreateTeam = ({ addTeam }) => {
	const [teamName, setTeamName] = useState("");
	const [memberName, setMemberName] = useState("");
	const [memberEmail, setMemberEmail] = useState("");
	const [members, setMembers] = useState([]);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const addMember = () => {
		if (members.length >= 4) {
			setError("A team can have a maximum of 4 members.");
			return;
		}
		if (!memberName || !memberEmail) {
			setError("Please enter both name and email.");
			return;
		}
		// Simple email validation
		const emailRegex = /\S+@\S+\.\S+/;
		if (!emailRegex.test(memberEmail)) {
			setError("Please enter a valid email address.");
			return;
		}
		setMembers([...members, { name: memberName, email: memberEmail }]);
		setMemberName("");
		setMemberEmail("");
		setError("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (members.length === 0) {
			setError("Please add at least one member.");
			return;
		}
		addTeam({ id: Date.now(), teamName, members });
		setTeamName("");
		setMembers([]);
		setError("");
		setSuccess("Team created successfully!");
		setTimeout(() => setSuccess(""), 3000);
	};

	return (
		<div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
			<h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
				Create a Team
			</h2>
			{error && (
				<div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
			)}
			{success && (
				<div className="bg-green-100 text-green-700 p-3 rounded mb-4">
					{success}
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2">Team Name</label>
					<input
						type="text"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						value={teamName}
						onChange={(e) => setTeamName(e.target.value)}
						placeholder="Enter team name"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2">Member Name</label>
					<input
						type="text"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						value={memberName}
						onChange={(e) => setMemberName(e.target.value)}
						placeholder="Enter member name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 mb-2">Member Email</label>
					<input
						type="email"
						className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
						value={memberEmail}
						onChange={(e) => setMemberEmail(e.target.value)}
						placeholder="Enter member email"
					/>
				</div>
				<button
					type="button"
					onClick={addMember}
					className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
				>
					Add Member
				</button>
				<div className="mt-4">
					<h3 className="text-lg font-semibold mb-2">Members:</h3>
					{members.length === 0 ? (
						<p className="text-gray-500">No members added yet.</p>
					) : (
						<ul className="list-disc list-inside">
							{members.map((member, index) => (
								<li key={index}>
									{member.name} ({member.email})
								</li>
							))}
						</ul>
					)}
				</div>
				<button
					type="submit"
					className="w-full mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
				>
					Create Team
				</button>
			</form>
		</div>
	);
};

export default CreateTeam;
