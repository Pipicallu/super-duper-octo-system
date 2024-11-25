import React, { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  power: string;
  price: number;
  quantitySoldBy: number;
  addToCart: (product: { id: number; name: string; quantity: number; price: number }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  power,
  price,
  quantitySoldBy,
  addToCart,
}) => {
  const [itemState, setItemState] = useState<number>(1);

  const handleAddToCart = () => {
    addToCart({ id, name, quantity: itemState, price: (price / 100) * itemState });
  };

  return (
    <div className="product-info-wrapper">
      <h2 className="product-name">{name}</h2>
      <p className="key-specs">
        {power} // packet of {quantitySoldBy}
      </p>
      <div className="add-to-cart">
        <div className="price-and-quantity">
          <p>£{((price / 100) * itemState).toFixed(2)}</p>
          <div className="quantity">
            <button
              className={`primary-btn quantity__btn ${itemState === 1 ? 'quantity__btn--disabled' : ''}`}
              onClick={() => itemState > 1 && setItemState(itemState - 1)}
            >
              -
            </button>
            <span title="Current quantity">{itemState}</span>
            <button
              className="primary-btn quantity__btn"
              onClick={() => setItemState(itemState + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="button-container">
          <button className="primary-btn add-to-cart__btn" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;