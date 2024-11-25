export const addToCart = (basket, product) => {
  let productExists = false;

  const updatedBasket = basket.map((item) => {
    if (item.id === product.id) {
      productExists = true;
      return {
        ...item,
        quantity: item.quantity + product.quantity,
        price: item.price + product.price,
      };
    }
    return item;
  });

  if (!productExists) {
    return [...updatedBasket, product];
  }

  return updatedBasket;
};