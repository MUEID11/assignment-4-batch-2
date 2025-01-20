import { useCallback, useEffect, useState } from "react";

const useProducts = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching data....",
      }));
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (!response.ok) {
        const errorMessage = `fetching product data failed ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      console.log(data)

      setProductData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading((prev) => ({
        ...prev,
        state: false,
        message: "",
      }));
    }
  }, []);
  useEffect(() => {
    fetchProducts();
    console.log('useEffect')
  }, [fetchProducts]);
  return {loading, error, productData}
};

export default useProducts;
