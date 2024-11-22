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
        width={400}
        height={400}
        src={image}
        alt={name}
        className="product-card__image"
      />
      <h2>{name}</h2>
      <p>
        {power} // packet of {quantitySoldBy}
      </p>
      <div className="Add-to-cart">
        <div>
          <p>Price: £{(price / 100 * itemState).toFixed(2)}</p>
          <button onClick={() => itemState > 1 && setItemState(itemState - 1)}>
            -
          </button>
          <span>{itemState}</span>
          <button onClick={() => itemState >= 1 && setItemState(itemState + 1)}>
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
