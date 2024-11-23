import React from "react";

export default function ProductCard({
  name,
  power,
  price,
  image,
  quantitySoldBy,
  addToCart,
}) {
  const [itemState, setItemState] = React.useState(1);

  const handleAddToCart = () => {
    addToCart({ name, quantity: itemState, price: (price / 100) * itemState });
  };
  console.log("ProductCard", name, power, price, image, quantitySoldBy);
  return (
    <div className="product-card-wrapper">
      <img
        className="product-card__image"
        width={400}
        height={400}
        src={image}
        alt={name}
      />
      <h2>{name}</h2>
      <p>
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
        <button className="add-to-cart__btn" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
