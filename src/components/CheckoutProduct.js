import React from 'react';
import "./CheckoutProduct.css";
import Button from './Button';
import {useStateValue} from "./StateProvider";

function ChekoutProduct({id,title,image,price,rating}) {
  const [{basket},dispatch]=useStateValue();

  const removeFromBasket=()=>{
    dispatch({
      type:"REMOVE_FROM_BASKET",
      id:id,
    })
  }
  return (
    <div className="checkoutProduct">
        <img src={image} alt="checkout img" className="checkoutProduct__img" />
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(rating)
                      .fill()
                      .map((_, i) => (
                      <p>⭐</p>
                      ))}
            </div>
            <Button onClick={removeFromBasket} title="Remove from basket" ></Button>
        </div>
    </div>
  )
}

export default ChekoutProduct