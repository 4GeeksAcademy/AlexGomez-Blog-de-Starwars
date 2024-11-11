const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
     
      
      infoplaneta: [],
      planets: [],
      vehicles: [],
      infoVehicles: [],
      people: [],
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
