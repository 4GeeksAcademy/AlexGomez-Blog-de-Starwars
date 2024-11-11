import React from "react";
import rigoImage from "../../img/logo.png";
import "../../styles/home.css";
import { Card } from "../component/Card.jsx";
import { People } from "../component/People.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => (

<>
	<div className="container">
	{/*	<h1>Hello Rigo!</h1>
		<p>
			<Card />
		{	<img src={rigoImage} />}
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>*/}
		<h2 className="text-danger mt-3">Characters</h2>
		<People />
		<h2 className="text-danger mt-5 pt-5">Planets</h2>
		<Planets />
</div>
	</>
);
