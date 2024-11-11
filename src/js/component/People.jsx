import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext";


export const People = () => {
    const { store, actions } = useContext(Context);
    const people= store.people;
	const character = store.character;
	
	

	return (<>
	  
			<div className="cuadrado d-flex justify-content-around m-3 ">
			  {
				
				people.map((item, index) => {
					return (				
						<Card key={index} name={item.name} id={item.uid} height={character[index].height} hair_color={character[index].hair_color} eye_color={character[index].eye_color}/>		
                        
					);
				})}
			
			<br />
			 
			</div>
		
	
		
	</>);
};
