import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";

// No cambies, aquí es donde inicializamos nuestro contexto, por defecto será null.
export const Context = createContext(null);

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState({
            store: Object.assign({}, state.store, updatedStore),
            actions: { ...state.actions }
          })
      })
    );

    useEffect(() => {
      const fetchData = async () => {
        try {
          const responsePeople = await fetch("https://www.swapi.tech/api/people");
          if (!responsePeople.ok) throw new Error("La respuesta de la red no fue correcta");
          const peopleData = await responsePeople.json();

          const characterDataPromises = peopleData.results.map(async (_, index) => {
            const response = await fetch(`https://www.swapi.tech/api/people/${index + 1}`);
            if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
            const singleData = await response.json();
            return singleData.result.properties;
          });

          const characters = await Promise.all(characterDataPromises);
          

          setState(prevState => ({...prevState, store: { ...prevState.store, people: peopleData.results, character: characters }
          }));
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      };

      fetchData();
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
