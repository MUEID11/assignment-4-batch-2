import { useContext } from "react";
import { ProductContext } from "../context";

const useProductData = () => {
  const productData = useContext(ProductContext)
  return productData;
};

export default useProductData;