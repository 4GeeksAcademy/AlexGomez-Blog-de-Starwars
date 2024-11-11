import React, { useContext,useEffect,useState } from "react";

import { Context } from "../store/appContext";

export const Description = () => {
    const [planet, setPlanet] = useState({});
    const { store, actions } = useContext(Context);
    console.log(store.idDescription);
    useEffect(() => {
  fetch(`https://www.swapi.tech/api/planets/${store.idDescription}`)
          .then((response) => {
            if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
            return response.json();
          })
          .then((data) => setPlanet(data.result.properties))
          .catch((err) => console.error(err));}, []);
console.log(planet);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                        <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
                </div>
                <div className="col-md-6 text-center">
                    <h2 className="text-center w-75 mx-auto pe-5">{planet.name}</h2>
                    <p className="m-5 px-5 w-75 text-center ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec urna convallis
                        dignissim. Nulla facilisi. Sed auctor, nulla nec ullamcorper placerat, enim massa posuere
                        ligula, non aliquam sapien purus a libero. Integer in ultricies nunc. Sed nec risus nec
                        libero ultrices cursus. Nullam sit amet nunc nec libero ultrices cursus. Nullam sit amet
                        nunc nec libero ultrices cursus. Nullam sit amet nunc nec libero ultrices cursus.
                    </p>
                </div>
            </div>
            <div>
                <hr className="my-5 text-danger fw-bold  " />
            </div>
            <div className="row text-center text-danger">
                <div className="col-md-2">
                    <h3>Name</h3>
                    <p>{planet.name}</p>
                </div>
                <div className="col-md-2">
                    <h3>Climate</h3>
                    <p>{planet.climate}</p>
                </div>
                <div className="col-md-2">
                    <h3>Population</h3>
                    <p>{planet.population}</p>
                </div>
                <div className="col-md-2">
                    <h3>Orbital Period</h3>
                    <p>{planet.orbital_period}</p>
                </div>
                <div className="col-md-2">
                    <h3>Rotation Period</h3>
                    <p>{planet.rotation_period}</p>
                </div>
                <div className="col-md-2">
                    <h3>Diameter</h3>
                    <p>{planet.diameter}</p>
                </div>
         </div>

        </div>
        

    );
};
