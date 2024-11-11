import React from "react";
const ImageMapper = {
    people: "characters",
    planets: "planets",
    vehicles: "vehicles"
  };
  
  const ImageComponent = ({ type, status, id, aux}) => {
    if(type=="planets" && id==1){id=5; console.log(id)};

    const imageType = ImageMapper[type]; 
    let imageUrl = `https://starwars-visualguide.com/assets/img/${imageType}/${id}.jpg`;

    if (!status) {
        imageUrl="https://via.placeholder.com/400x200"; 
    }
  console.log(type);
    return (
        
      <img   src={imageUrl} className= { !aux? "card-img-top shortDimen":"card-img-top highDimen"} alt={type} />
    );
  };
  
  export default ImageComponent;
  