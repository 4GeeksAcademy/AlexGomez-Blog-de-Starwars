import React, { useState, useEffect, createContext } from "react";
import getState from "./flux.js";

export const Context = createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState((prevState) => ({
            store: { ...prevState.store, ...updatedStore },
            actions: { ...prevState.actions },
          })),
      })
    );

    useEffect(() => {
      const fetchData = async (key, url) => {
        const storedData = localStorage.getItem(key);
      
        if (storedData) {
          if(key === "people"){
    
          setState((prevState) => ({
            ...prevState,
            store: { ...prevState.store, people: JSON.parse(localStorage.getItem('people')) , infopeople: JSON.parse(localStorage.getItem('infopeople'))},
          }));

        }
         if(key === "planets"){
                            
            setState((prevState) => ({
              ...prevState,
              store: { ...prevState.store, planets: JSON.parse(localStorage.getItem('planets')) , infoplaneta: JSON.parse(localStorage.getItem('infoplanets'))},
            }));  
         }
         if(key === "vehicles"){
                            
            setState((prevState) => ({
              ...prevState,
              store: { ...prevState.store, vehicles: JSON.parse(localStorage.getItem('vehicles')) , infoVehicles: JSON.parse(localStorage.getItem('infovehicles'))},
            }))
          }
          return;
        }

        try {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error("La respuesta de la red no fue correcta");
          const data = await response.json();
        
          

          const characterDataPromises = data.results.map(
            async (item, index) => {
              const detailResponse = await fetch(`${url}/${item.uid}`);
              if (!detailResponse.ok)
                throw new Error("La respuesta de la red no fue correcta");
              const detailData = await detailResponse.json();
              return detailData.result.properties;
            }
          );

          const details = await Promise.all(characterDataPromises);

          setState((prevState) => ({
            ...prevState,
            store: {
              ...prevState.store,
              [key]: data.results,
              [`info${key}`]: details,
            },
          }));

          localStorage.setItem(key, JSON.stringify(data.results));
          localStorage.setItem(`info${key}`, JSON.stringify(details));
        } catch (error) {
          console.error(`Error al obtener los datos de ${key}:`, error);
        }
      };

      fetchData("people", "https://www.swapi.tech/api/people");
      fetchData("planets", "https://www.swapi.tech/api/planets");
      fetchData("vehicles", "https://www.swapi.tech/api/vehicles");
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
