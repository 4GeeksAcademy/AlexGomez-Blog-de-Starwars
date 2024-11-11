import React from "react";
import rigoImage from "../../img/logo.png";
import "../../styles/home.css";
import { Card } from "../component/Card.jsx";
import { People } from "../component/People.jsx";

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
		<h2 className="text-danger ms-3">Characters</h2>
		<People />
</div>
	</>
);
