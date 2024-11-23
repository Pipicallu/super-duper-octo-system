import { getProducts } from "../utils/getProducts";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        data: { allProducts: [{ id: 1, name: "Product 1" }] },
      }),
  })
);

describe("getProducts", () => {
  beforeEach(() => {
    fetch.mockClear();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    console.error.mockRestore();
  });

  it("fetches products successfully", async () => {
    const products = await getProducts();
    expect(products).toEqual([{ id: 1, name: "Product 1" }]);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
    query GetProducts {
      allProducts {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        model_code
        colour
        img_url
      }
    }
  `,
      }),
    });
  });

  it("handles HTTP errors", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        status: 500,
      })
    );

    const products = await getProducts();
    expect(products).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("handles GraphQL errors", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ errors: [{ message: "GraphQL error" }] }),
      })
    );

    const products = await getProducts();
    expect(products).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("handles network errors", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Network error"))
    );

    const products = await getProducts();
    expect(products).toEqual([]);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
