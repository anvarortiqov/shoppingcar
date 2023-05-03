import React from "react";
import { AiFillCar, AiFillSetting } from "react-icons/ai";
import { FcMoneyTransfer } from "react-icons/fc";
import { GrValidate } from "react-icons/gr";
import { Link } from "react-router-dom";
function Car(props) {
  const { make, model, price, year, engine, img, id } = props;
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
          <Link to={`/cars/${id}`}>
            <button className="btn btn-cart">Ko`proq o`qish</button>
          </Link>
        </div>
        <div className="cart-left">
          <img src={img} alt="cart-image" className="cart-image" />
        </div>
      </div>
    </div>
  );
}

export default Car;
