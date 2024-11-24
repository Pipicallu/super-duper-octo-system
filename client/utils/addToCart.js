export const addToCart = (basket, product) => {
    if (basket.find((item) => item.id === product.id)) {
      return basket.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
            price: item.price + product.price,
          };
        }
        return item;
      });
    }
    return [...basket, product];
  };