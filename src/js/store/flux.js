const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     
      people: [],
      infoplaneta: [],
      planets: [],
      vehicles: [],
      infoVehicles: [],
      favorites: [],
      infopeople: [],
      globalChange: false,
      
    },
    actions: {
     

        Favorite: (name) => {
        
              setStore(name);
      },
      GlobalChange(value) {
    
        setStore({ globalChange: value ? false : true});
        
      }
      
    
    },
  };
};

export default getState;
