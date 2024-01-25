const products = () => {
  const getProducts = async (limit = 10, skip = 0) => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data.products;
  };

  return { getProducts };
};

export default products;
