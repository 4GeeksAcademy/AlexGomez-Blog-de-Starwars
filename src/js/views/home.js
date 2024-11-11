import React from "react";
import rigoImage from "../../img/logo.png";
import "../../styles/home.css";
import { Card } from "../component/Card.jsx";
import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Home = () => (

<>
	<div className="container">

		<h2 className="text-danger mt-3">Characters</h2>
		<People />
		<h2 className="text-danger mt-5 pt-5">Planets</h2>
		<Planets />
		<h2 className="text-danger mt-5 pt-5">Vehicles</h2>
		<Vehicles/>
</div>
	</>
);
