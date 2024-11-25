import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { getProducts } from "../utils/getProducts";
import Footer from "../components/Footer";
import Image from "next/image";
import { addToCart as addToCartUtil } from "../utils/addToCart";
import BasketIcon from "../components/Basket";
import ProductCard from "../components/ProductCard";
import Description from "../components/Description";
import Specifications from "../components/Specifications";
import type {ProductTypes} from "../types/product";

interface ProductProps {
  products: ProductTypes[];
}

const Product: React.FC<ProductProps> = ({ products }) => {
  const [basket, setBasket] = useState([]);

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const addToCart = (product: { id: number; name: string; quantity: number; price: number }) => {
    const updatedBasket = addToCartUtil(basket, product);
    setBasket(updatedBasket);
  };

  const {
    id,
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
              id={id}
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
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const products = await getProducts();
    return { props: { products } };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { props: { products: [], error: error.message } };
  }
};

export default Product;