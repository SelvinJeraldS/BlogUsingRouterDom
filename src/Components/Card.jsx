import React from "react";
// import { Link } from 'react-router-dom';
import "./Card.css"

const Card = ({element,index}) => {
  return (
   
<div key={index}>

<div className="card-group">
  <div className="card">
    <img src={element.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{element.content}</h5>
      <p className="card-text">{element.description}</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
  
  <div className="card">
  <img src={element.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{element.content}</h5>
      <p className="card-text">{element.description}</p>
      <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

</div>


  );
};

export default Card;
