import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Vehicles = () => {
    const { store } = useContext(Context);
    const vehicles = store.vehicles;
    const infoVehicles = store.infoVehicles;
  
    return (
      <div className="cuadrado d-flex justify-content-around m-3">
          
        {vehicles.map((item, index) => (
          <Card
            type="vehicles"
            key={index}
            name={item.name}
            id={item.uid}
            height={infoVehicles[index]?.crew}
            hair_color={infoVehicles[index]?.model}
          />
        ))}
      </div>
    );
  };
  