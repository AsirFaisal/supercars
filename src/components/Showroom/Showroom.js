import React from "react";
import { useState, useEffect } from "react";
import Car from "../Cars/Car";
import "./Showroom.css";
import Cart from "../Cart/Cart";

const Showroom = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <div className="show">
        <div className="car-container">
          {cars.map((car) => (
            <Car key={car.id} car={car} handleAddToCart={handleAddToCart}></Car>
          ))}
        </div>
        <div>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
