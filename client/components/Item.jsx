import React from "react";
import ProductCard from "./ProductCard";
import Description from "./Description";
import Specifications from "./Specifications";


const Item = (props) => {
  const {
    img_url: image,
    name,
    power,
    quantity,
    price,
    description,
    brand,
    weight,
    height,
    width,
    length,
    model_code,
    colour,
    addToCart
  } = props;
  return (
    <div>
      <ProductCard
        image={image}
        name={name}
        power={power}
        quantitySoldBy={quantity}
        price={price}
        addToCart={addToCart}
      />
      <Description description={description} />
      <Specifications
        brand={brand}
        weight={weight}
        height={height}
        width={width}
        length={length}
        model_code={model_code}
        colour={colour}
      />
    </div>
  );
};

export default Item;
