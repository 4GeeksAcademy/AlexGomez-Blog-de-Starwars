import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// No cambies, aquí es donde inicializamos nuestro contexto, por defecto será null.
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState({
            store: Object.assign(state.store, updatedStore),
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
				// state.store.people = peopleData.results;
				//setState({ store: state.store });
				       const response = await fetch(`https://www.swapi.tech/api/people/1`);
						if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
						 const data = await response.json();
						 const datos = { ...peopleData, ...data };	 
						 state.store.people = datos;
						 setState({ store: state.store });
						//console.log(datos);
						
        } catch (error) {
          console.error("Error al obtener los datos (linea 32 app):", error);
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
