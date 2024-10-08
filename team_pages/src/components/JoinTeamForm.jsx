// src/components/JoinTeamForm.js
import React, { useState } from "react";

const JoinTeamForm = ({ onJoin, onCancel }) => {
	const [memberName, setMemberName] = useState("");
	const [memberEmail, setMemberEmail] = useState("");
	const [error, setError] = useState("");

	const submitJoin = () => {
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
		onJoin({ name: memberName, email: memberEmail });
	};

	return (
		<div className="mt-4">
			{error && (
				<div className="bg-red-100 text-red-700 p-2 rounded mb-2">{error}</div>
			)}
			<input
				type="text"
				className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
				placeholder="Your Name"
				value={memberName}
				onChange={(e) => setMemberName(e.target.value)}
			/>
			<input
				type="email"
				className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
				placeholder="Your Email"
				value={memberEmail}
				onChange={(e) => setMemberEmail(e.target.value)}
			/>
			<div className="flex justify-between">
				<button
					onClick={submitJoin}
					className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
				>
					Join
				</button>
				<button
					onClick={onCancel}
					className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200 mt-2"
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default JoinTeamForm;
