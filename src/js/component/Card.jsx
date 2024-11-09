import React,{useState} from "react";

export const Card = () => {
    const [like, setLike] = useState(true);
  return (
  
    <div className="card" style={{ width: "18rem" }}>
    <img src="https://placehold.co/400x200"
        className="card-img-top"
        alt="..."
    />
    <div className="card-body">
        <h4 className="card-title text-start m-3">Card title</h4>
        <div className="card-text text-start m-3 lh-1">
            <p className="lh-1">Gender: <span>male</span></p>
            <p className="lh-1">Hair Color: <span>blond</span></p>
            <p className="lh-1">Eye Color: <span>blue</span></p>
        </div>
        <div className="d-flex justify-content-around">
            <a href="#" className="btn btn-outline-primary fw-bold my-2">
                Learn more!
            </a>
            <a className="text-bg-primary d-inline-block mt-2" href="#">
                {like ? <i className="far fa-heart byellow cyellow"></i> : <i className="fas fa-heart"></i>}
            </a>
        </div>
    </div>
</div>

   
  );
};
