import React from "react";

const NavBar = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a className="navbar-brand mb-0 h1">
				Navbar
				<span className="badge badg-pill badge-secondary m-2">
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
