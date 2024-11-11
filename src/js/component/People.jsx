import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";

export const People = () => {
  const { store } = useContext(Context);
  const people = store.people;
  const character = store.character;

  return (
    <div className="cuadrado d-flex justify-content-around m-3">
		
      {people.map((item, index) => (
        <Card
          type="people"
          key={index}
          name={item.name}
          id={item.uid}
          height={character[index]?.height}
          hair_color={character[index]?.hair_color}
          eye_color={character[index]?.eye_color}
        />
      ))}
    </div>
  );
};
