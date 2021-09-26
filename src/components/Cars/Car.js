import React from "react";
import "./Car.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCar } from "@fortawesome/free-solid-svg-icons";
const Car = (props) => {
  const { name, img, price, model, Manufacturer, TopSpeed, engine } = props.car;
  const element = <FontAwesomeIcon icon={faCar} />;

  return (
    <div className="card">
      <img src={img} alt="car-card" />
      <div class="container">
        <h1>
          <b>{name}</b>
        </h1>
        <p>Price:{price}</p>
        <p>Model year :{model}</p>
        <p>Manufacturer :{Manufacturer}</p>
        <p>Top Speed : {TopSpeed}</p>
        <p>Engine : {engine}</p>
        <button onClick={() => props.handleAddToCart(props.car)}>
          {element} Add to Collection
        </button>
      </div>
    </div>
  );
};

export default Car;
