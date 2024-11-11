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
     

      Favorite: (name) => {
      
            setStore(name);
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
          setStore({ ...store, character: characters });
        };

        fetchAllCharacters().catch(err => console.error(err));
      },
      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          console.log(elm);
          
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ ...store, demo });
      },
    },
  };
};

export default getState;
