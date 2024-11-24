import React from "react";

export default function ProductCard({
  name,
  power,
  price,
  quantitySoldBy,
  addToCart,
}) {
  const [itemState, setItemState] = React.useState(1);

  const handleAddToCart = () => {
    addToCart({ name, quantity: itemState, price: (price / 100) * itemState });
  };
  return (
    <div className="product-info-wrapper">
      <h2 className="product-name">{name}</h2>
      <p className="key-specs">
        {power} // packet of {quantitySoldBy}
      </p>
      <div className="add-to-cart">
        <div className="price-and-quantity">
          <p>Price: £{((price / 100) * itemState).toFixed(2)}</p>
          <div className="quantity">
            <button
              className="quantity__btn"
              onClick={() => itemState > 1 && setItemState(itemState - 1)}
            >
              -
            </button>
            <span title="Current quantity">{itemState}</span>
            <button
              className="quantity__btn"
              onClick={() => itemState >= 1 && setItemState(itemState + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="button-container">
        <button className="add-to-cart__btn" onClick={handleAddToCart}>
          Add to cart
        </button>
        </div>
      </div>
    </div>
  );
}
