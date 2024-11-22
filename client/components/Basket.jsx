import React, { useState } from 'react';

const BasketIcon = ({items}) => {
  const [hover, setHover] = useState(false);

  return (
    <div 
      className="basket-icon-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href="/product">
        <img src="/basket.svg" alt="logo" width={30} height={30} />
      </a>
      {hover && (
        <div className="basket-preview">
          <ul>
            {items.map((item) => (
                <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>£{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BasketIcon;
