import React from "react";
import { getProducts } from "../utils/getProducts";
import Item from "../components/item";
import Footer from "../components/Footer";
import Image from 'next/image';
import BasketIcon from "../components/Basket"; 

const Catalogue = ({ products }) => {
  const [basket, setBasket] = React.useState([]);
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const addToCart = (product) => {
    if (basket.find((item) => item.name === product.name)) {
      const updatedBasket = basket.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity, price: item.price + product.price };
        }
        return item;
      });
      return setBasket(updatedBasket);
    }
    setBasket([...basket, product]);
  };
  return (
    <>
    <div className="Nav">
    <Image src="/octopus-logo.svg" alt="logo" width={200} height={40} />
    <BasketIcon items={basket} />
    </div>
    <div>
      {products.map((product) => (
        <Item key={product.id} {...product} addToCart={addToCart} />
      ))} 
      <Footer />
    </div>
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

export default Catalogue;
