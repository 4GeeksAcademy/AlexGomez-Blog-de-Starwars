import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const Planets = () => {
  const { store } = useContext(Context);
  const people = store.planets;
  const infoplaneta = store.infoplaneta;


  return (
    <div className="cuadrado d-flex justify-content-around m-3">
		
      {people.map((item, index) => (
        <Card
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
