import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface BasketIconProps {
  items: Item[];
}

const BasketIcon: React.FC<BasketIconProps> = ({ items }) => {
  const [hover, setHover] = useState(false);
  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div
      className="basket-icon-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(!hover)}
    >
      <div className="basket-icon">
        {totalQuantity >= 1 && (
          <span title="Basket items" className="basket-notification">
            {totalQuantity}
          </span>
        )}
        <img src="/basket.svg" alt="logo" width={28} height={28} />
      </div>
      {hover && (
        <div className="basket-preview">
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                Item: {item.name}
                <p>Qty: {item.quantity}</p>
                <p>Price: £{item.price.toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <button className="primary-btn checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default BasketIcon;