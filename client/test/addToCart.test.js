import { addToCart } from "../utils/addToCart";

const product = {
  id: 1,
  name: "Product 1",
  quantity: 1,
  price: 100,
  power: "",
  description: "",
  brand: "",
  weight: 0,
  height: 0,
  width: 0,
  length: 0,
  model_code: "",
  colour: "",
  img_url: "",
};

test("adds a new product to the basket", () => {
  const basket = [];
  const updatedBasket = addToCart(basket, product);
  expect(updatedBasket).toEqual([product]);
});

test("updates the quantity and price of an existing product in the basket", () => {
  const basket = [product];
  const updatedBasket = addToCart(basket, product);
  expect(updatedBasket).toEqual([
    {
      ...product,
      quantity: 2,
      price: 200,
    },
  ]);
});

test("shows multiple products in the basket", () => {
  const basket = [product];
  const newProduct = {
    ...product,
    id: 2,
    name: "Product 2",
    price: 200,
  };
  const updatedBasket = addToCart(basket, newProduct);
  expect(updatedBasket).toEqual([product, newProduct]);
});