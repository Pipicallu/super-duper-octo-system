import { addToCart } from "../utils/addToCart";

test("adds a new product to the basket", () => {
  const basket = [];
  const product = { id: 1, name: "Product 1", quantity: 1, price: 100 };
  const updatedBasket = addToCart(basket, product);
  expect(updatedBasket).toEqual([product]);
});

test("updates the quantity and price of an existing product in the basket", () => {
  const basket = [{ id: 1, name: "Product 1", quantity: 1, price: 100 }];
  const product = { id: 1, name: "Product 1", quantity: 1, price: 100 };
  const updatedBasket = addToCart(basket, product);
  expect(updatedBasket).toEqual([{ id: 1, name: "Product 1", quantity: 2, price: 200 }]);
});