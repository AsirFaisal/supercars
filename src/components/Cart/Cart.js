import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let strength = 0;
  for (const product of cart) {
    total = total + parseInt(product.price);
    strength = strength + 3;
  }
  return (
    <div className="cart">
      <h2>Total Cars: {props.cart.length}</h2>
      <h3>Cars Added :</h3>
      {cart.map((car) => (
        <li>{car.name}</li>
      ))}

      <br></br>
      <p>Garage Value : ${total}</p>
      <p>Strength : {strength}</p>
    </div>
  );
};

export default Cart;
