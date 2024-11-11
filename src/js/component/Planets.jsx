import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Planets = () => {
  const { store } = useContext(Context);
  const planets = store.planets;
  const infoplaneta = store.infoplaneta;


  return (
    <div className="cuadrado d-flex justify-content-around m-3">
		
      {planets.map((item, index) => (
        <Card
          type="planets"
          key={index}
          name={item.name}
          id={item.uid}
          height={infoplaneta[index]?.population}
          hair_color={infoplaneta[index]?.terrain}
        />
      ))}
    </div>
  );
};
