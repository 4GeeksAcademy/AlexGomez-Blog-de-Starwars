import React, { useState, useEffect } from 'react';

const StarWarsCharacter = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${characterId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.result.properties);
      })
      .catch(error => console.error('Error:', error));
  }, [characterId]);

  return (
    <div>
      <h1>{character?.name}</h1>
      {character && (
        <img 
          src={`https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`} 
          alt={character.name}
        />
      )}
    </div>
  );
};

export default StarWarsCharacter;
