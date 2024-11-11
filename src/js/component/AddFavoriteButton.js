// component/AddFavoriteButton.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AddFavoriteButton = () => {

    
    const { actions } = useContext(Context);

    const handleClick = () => {
        //actions.addFavorite("Nuevo Favorito");
    };

    return (
        <button className="btn btn-primary" onClick={handleClick}>
            Add Favorite
        </button>
    );
};
