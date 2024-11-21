import React from "react";
import { getProducts } from "../utils/getProducts";
import ProductCard from "../components/ProductCard";

const Product = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }
  const product = products[0];
  const { img_url: image, name, power, quantity, price } = product;
  return (
    <div>
      <ProductCard
        image={image}
        name={name}
        power={power}
        quantitySoldBy={quantity}
        price={price}
      />
    </div>
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
