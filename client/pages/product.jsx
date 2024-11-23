import React from "react";
import { getProducts } from "../utils/getProducts";
import Footer from "../components/Footer";
import Image from "next/image";
import BasketIcon from "../components/Basket";
import ProductCard from "../components/ProductCard";
import Description from "../components/Description";
import Specifications from "../components/Specifications";

const Product = ({ products }) => {
  const [basket, setBasket] = React.useState([]);
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const addToCart = (product) => {
    if (basket.find((item) => item.name === product.name)) {
      const updatedBasket = basket.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
            price: item.price + product.price,
          };
        }
        return item;
      });
      return setBasket(updatedBasket);
    }
    setBasket([...basket, product]);
  };

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
  } = products[0];

  return (
    <>
      <div className="nav">
        <Image src="/octopus-logo.svg" alt="logo" width={200} height={40} />
        <BasketIcon items={basket} />
      </div>
      <div>
        <div className="item-wrapper">       
        <img className="product-image" src={image} alt="product" width={400} height={400} />
          
         
          <div className="item-info">
          <ProductCard
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  try {
    const products = await getProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { props: { products: [], error: error.message } };
  }
}

export default Product;
