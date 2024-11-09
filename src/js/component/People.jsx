import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const People = () => {
    const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						console.log(item)
                        
					);
				})}
			</ul>
			<br />
			
		</div>
	);
};
