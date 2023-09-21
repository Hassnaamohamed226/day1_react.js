import React from "react";
import './card.css'
//import Card from 'react-bootstrap/Card';

/* const Cardd = (props) => {
   // Destructure the props

  return (
    <div className="card car" >
      <div className={`shadow ${props.color}`}>
        <h4>{props.title}</h4>
        <Card.Body>
          <Card.Text>{title}</Card.Text> 
          <Card>{id}</Card>
        </Card.Body>
      </div>
    </div>
  );
};

export default Cardd; */




function Card(props) {
  return (
    <div className="Card car">
      <div
        className={`card shadow  card-body ${props.color} text-light d-flex justify-content-center `}
      >
        <h2 className=" fs-3 ">{props.text}</h2>
        
      </div>
    </div>
  );
}

export default Card;
