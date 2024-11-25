import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product";


const products = [
  {
    id: 1,
    name: "Product 1",
    power: "100W",
    description: "A great product",
    price: 1000,
    quantity: 10,
    brand: "Brand A",
    weight: 1.2,
    height: 10,
    width: 5,
    length: 5,
    model_code: "Model123",
    colour: "Red",
    img_url: "http://example.com/product1.jpg",
  },
];

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(<Product products={products} />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(<Product products={products} />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
