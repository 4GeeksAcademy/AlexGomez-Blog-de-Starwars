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
        setStore: (updatedStore) => setState((prevState) => ({
          store: { ...prevState.store, ...updatedStore },  // Merge updated store values with the current store
          actions: { ...prevState.actions }
      })),
      
      })
    );

    useEffect(() => {
      const fetchData = async (bool) => {


        if(bool="people"){
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

          setState(prevState => ({
            ...prevState,
            store: { ...prevState.store, people: peopleData.results, character: characters }
          }));
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      } if(bool="Planets"){
        try {
          const responsePlanets = await fetch("https://www.swapi.tech/api/planets");
          if (!responsePlanets.ok) throw new Error("La respuesta de la red no fue correcta");
          const planetsData = await responsePlanets.json();

          const characterDataPlaneta = planetsData.results.map(async (_, index) => {
            const response = await fetch(`https://www.swapi.tech/api/planets/${index + 1}`);
            if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
            const singleData = await response.json();
            return singleData.result.properties;
          });
          const infoplaneta = await Promise.all(characterDataPlaneta);
          
          
          setState(prevState => ({
            ...prevState,
            store: { ...prevState.store, planets: planetsData.results, infoplaneta: infoplaneta }
          }));
         
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      } if(bool="Vehicles"){
        try {
          const responseVehicles = await fetch("https://www.swapi.tech/api/vehicles");
          if (!responseVehicles.ok) throw new Error("La respuesta de la red no fue correcta");
          const vehiclesData = await responseVehicles.json();
        
          const characterDataVehicles = vehiclesData.results.map(async (item, index) => {
            const response = await fetch(`https://www.swapi.tech/api/vehicles/${item.uid}`);
            if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
            const singleData = await response.json();
            return singleData.result.properties;
          });
          const infoVehicles = await Promise.all(characterDataVehicles);
          setState(prevState => ({
            ...prevState,
            store: { ...prevState.store, vehicles: vehiclesData.results, infoVehicles: infoVehicles }
          }));
        } catch (error) {
          console.error("Error al obtener los datos:", error);
        }
      } 
    
    };

      fetchData("people");
      fetchData("Planets");
      fetchData("Vehicles");
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
