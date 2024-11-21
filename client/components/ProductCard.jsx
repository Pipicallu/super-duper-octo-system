import React from 'react';

export default function ProductCard({ name, power, price, image, quantitySoldBy })  {

  console.log('ProductCard', name, power, price, image, quantitySoldBy);
  return (
    <div className="product-card-wrapper">
      <img
        width={200}
        src={image}
        alt={name}
        className="product-card__image"
      />
      <h2>{name}</h2>
      <p>{power} // packet of {quantitySoldBy}</p>
      <div className='Add-to-cart'>
        <div>
          <p>Price: £{price/100}</p>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );

}
