import React from "react";
import Img1 from "../assets/kitchen_item1.jpg";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card mt-2 mx-2" style={{ width: "18rem" }}>
      <img src={Img1} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link to="#" className="btn btn-primary">
          Go somewhere
        </Link>
        <div className="container w-100">
          <select className="m-2 h-100 w-100">
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Card;
