import type {ProductTypes} from "../types/product";

interface GraphQLResponse {
  data: {
    allProducts: ProductTypes[];
  };
  errors?: { message: string }[];
}

export async function getProducts(): Promise<ProductTypes[]> {
  const url = "http://localhost:3001/graphql";

  const query = `
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
  `;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: GraphQLResponse = await response.json();

    if (result.errors) {
      throw new Error(
        `GraphQL error: ${result.errors
          .map((error) => error.message)
          .join(", ")}`
      );
    }

    return result.data ? result.data.allProducts : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}