import React from "react";
import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";
import { Vehicles } from "../component/Vehicles.jsx";

export const Home = () => (

	<>
		<div className="container">

				
				<People />
				<Planets />
				<Vehicles/>
		</div>
	</>
);
