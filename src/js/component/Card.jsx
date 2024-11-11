import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    
    const [like, setLike] = useState(false);

    const handleClick = (name) => {
        setLike(!like);
        if (!like) {
            actions.addFavorite(name);
            
        } else {
            actions.deleteFavorite(name);
        }
        console.log("Añadido a favoritos", name);
    };

    return (
        <div className="contenido card mb-3 mb-sm-0 ">
            <img src="https://placehold.co/400x200" className="card-img-top" alt="..." />
            <div className="card-body">
                <h4 className="card-title text-start m-3">{props.name}</h4>
                <div className="card-text text-start m-3 lh-1">
                    <p className="lh-1">Height: <span>{props.height || 'N/A'}</span></p>
                    <p className="lh-1">Hair Color: <span>{props.hair_color || 'N/A'}</span></p>
                    <p className="lh-1">Eye Color: <span>{props.eye_color || 'N/A'}</span></p>
                </div>
                <div className="d-flex justify-content-around">
                    <Link to={{ pathname: `/Description/${props.id}` }} className="btn btn-outline-primary fw-bold my-2" onClick={()=>{store.idDescription=props.id}}>
                        Learn more!
                    </Link>
                    <button className="" onClick={() => handleClick(props.name)}>
                        {like ? <i className="fas fa-heart"></i> : <i className="far fa-heart byellow cyellow"></i>}
                    </button>
                </div>
            </div>
        </div>
    );
};
