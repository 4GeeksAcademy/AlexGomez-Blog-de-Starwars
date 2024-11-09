import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
export const Navbar = () => {
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0  h1">	<img  className="logo mx-lg-4" src={logo} /></span>
			</Link>
			<div className="ml-auto">
			<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle px-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span class="badge bg-secondary">4</span>
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</div>
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
