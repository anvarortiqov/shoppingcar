import React from "react";
import { AiFillCar, AiFillSetting } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrValidate } from "react-icons/gr";
function Cart(props) {
  const { make, model, price, year, engine, img } = props;
  return (
    <div className="cart">
      <div className="cart--title">
        <h3>{make}</h3>
      </div>
      <div className="row">
        <div className="cart-content">
          <ul>
            <li className="cart--content">
              <AiFillCar /> {model}
            </li>
            <li className="cart--content">
              <FcMoneyTransfer /> {price}
            </li>
            <li className="cart--content">
              <AiFillSetting /> {engine}
            </li>
            <li className="cart--content">
              <GrValidate /> {year}
            </li>
          </ul>
        </div>
        <div className="cart-left">
          <img src={img} alt="cart-image" className="cart-image" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
