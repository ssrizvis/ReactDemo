import React from "react";
import { NavLink, Link } from "react-router-dom";

const NewNavBar = () => {
	// const navigations = [
	// 	{ id: 101, name: "movies", label: "Movies" },
	// 	{ id: 102, name: "rentals", label: "Rentals" },
	// 	{ id: 103, name: "customers", label: "Customers" }
	// ];
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
			<Link className="navbar-brand" to="/">
				Navbar
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<div className="navbar-nav">
					<NavLink className="nav-item nav-link" to="/movies">
						Movies
					</NavLink>
					<NavLink className="nav-item nav-link" to="/rentals">
						Rentals
					</NavLink>
					<NavLink className="nav-item nav-link" to="/customers">
						Customers
					</NavLink>
					<NavLink className="nav-item nav-link" to="/login">
						Login
					</NavLink>
					<NavLink className="nav-item nav-link" to="/register">
						Register
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default NewNavBar;
