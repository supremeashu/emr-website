// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-3 flex items-center justify-between">
				<div>
					<Link to="/" className="text-2xl font-bold text-blue-600">
						WorkshopReg
					</Link>
				</div>
				<div className="hidden md:flex space-x-6">
					<Link to="/" className="text-gray-700 hover:text-blue-600">
						Home
					</Link>
					<Link to="/create-team" className="text-gray-700 hover:text-blue-600">
						Create Team
					</Link>
					<Link to="/teams" className="text-gray-700 hover:text-blue-600">
						Join Teams
					</Link>
				</div>
				<div className="md:hidden">
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="focus:outline-none"
					>
						{isOpen ? (
							<XIcon className="h-6 w-6 text-gray-700" />
						) : (
							<MenuIcon className="h-6 w-6 text-gray-700" />
						)}
					</button>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden bg-white shadow-md">
					<Link
						to="/"
						className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
						onClick={() => setIsOpen(false)}
					>
						Home
					</Link>
					<Link
						to="/create-team"
						className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
						onClick={() => setIsOpen(false)}
					>
						Create Team
					</Link>
					<Link
						to="/teams"
						className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
						onClick={() => setIsOpen(false)}
					>
						Join Teams
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
