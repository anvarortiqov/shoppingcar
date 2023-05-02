import React from 'react'
import {AiFillCar,AiFillSetting} from 'react-icons/ai'
import {FcMoneyTransfer} from 'react-icons/fc'
import {GrValidate} from 'react-icons/gr'
function Cart(props) {
  const {make,model,price,year,engine,img}=props
  return (
    <div className='cart row'>
       <div className="cart-left">
          <img src={img} alt="cart-image" />
       </div>
       <div className="cart-content">
          <h3>{make}</h3>
          <ul>
              <li className='row'>
                  <AiFillCar/> {model} 
              </li>
              <li className='row'>
                  <FcMoneyTransfer/> {price} 
              </li>
              <li className='row'>
                  <AiFillSetting/> {engine} 
              </li>
              <li className='row'>
                  <GrValidate/> {year} 
              </li>
          </ul>   
       </div>
    </div>
  )
}

export default Cart