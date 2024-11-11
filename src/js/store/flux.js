const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        { title: "FIRST", background: "white", initial: "white" },
        { title: "SECOND", background: "white", initial: "white" },
      ],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      character: [],
      idDescription: 0,
    },
    actions: {
    /*  exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
     
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => {
            if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
            return response.json();
          })
          .then((data) => setStore({ planets: data.results }))
          .catch((err) => console.error(err));
      },
      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles")
          .then((response) => {
            if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
            return response.json();
          })
          .then((data) => setStore({ vehicles: data.results }))
          .catch((err) => console.error(err));
      },*/

      
      addFavorite: (name) => {
      return alert(name);
    
      },
      deleteFavorite: (name) => {
        const store = getStore();
        const favorites = store.favorites.filter((favorite) => favorite !== name);
        setStore({ favorites });
      },
     
      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo });
      },
    },
  };
};

export default getState;
