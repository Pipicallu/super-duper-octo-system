import React, { useState } from 'react';



const BasketIcon = ({items}) => {
  const [hover, setHover] = useState(false);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
 
  return (
    <div 
      className="basket-icon-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(!hover)}
    >
      <a href="/product">
        <p title='Basket items'>{totalQuantity}</p>
        <img src="/basket.svg" alt="logo" width={28} height={28} />
      </a>
      {hover && (
        <div className="basket-preview">
          <ul>
            {items.map((item) => (
            <li key={item.id}>
                item: {item.name}
                <p >Qty: {item.quantity}</p>
                <p>Price: £{item.price}</p>
            </li>
            ))}
          </ul>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default BasketIcon;
