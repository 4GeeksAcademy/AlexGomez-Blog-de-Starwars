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
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        console.log("Data loaded");
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
      },
      addFavorite: (name) => {
        const store = getStore();
        const favorites = store.favorites.concat(name);
        setStore({ favorites });
      },
      deleteFavorite: (name) => {
        const store = getStore();
        const favorites = store.favorites.filter((favorite) => favorite !== name);
        setStore({ favorites });
      },
      loadCharacters: () => {
        const store = getStore();
        const fetchCharacterData = async (id) => {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
          if (!response.ok) throw new Error("La respuesta de la red no fue correcta");
          const data = await response.json();
          return data.result.properties;
        };

        const fetchAllCharacters = async () => {
          const characterPromises = store.people.map((_, i) => fetchCharacterData(i + 1));
          const characters = await Promise.all(characterPromises);
          setStore({ character: characters });
        };

        fetchAllCharacters().catch((err) => console.error(err));
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
