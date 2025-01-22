import { useEffect, useReducer } from "react";
import { ProductContext } from "../context";
import { useProducts } from "../Hooks";
import { TaskReducer } from "./ProductReducer";
import { PRODUCTS_TO_CART, SEARCH_PRODUCTS, SET_ALL_PRODUCTS, SET_PRODUCTS, SORT_PRODUCTS } from "./action";
const initialState = {
  products:[],
  allProducts:[],
  cartItems: [],
}

const ProductDataProvider = ({ children }) => {
  const { loading, error, productData } = useProducts();
  const [state, dispatch] = useReducer(TaskReducer, initialState);


  //setting product data to reducers state
  useEffect(() => {

    if (productData && productData?.length > 0) {
  
      dispatch({
        type: SET_PRODUCTS,
        payload: productData,
      });
      dispatch({
        type: SET_ALL_PRODUCTS,
        payload: productData,
      });
    }
  }, [productData]);

  //dispatch
  const sortByPrice = (sortOrder) =>
    dispatch({
      type: SORT_PRODUCTS,
      payload: { sortOrder },
    });
  const searchByTitle = (searchQuery) =>
    dispatch({
      type: SEARCH_PRODUCTS,
      payload: {searchQuery},
    });
  const itemToCart = (product) => dispatch({
    type: PRODUCTS_TO_CART,
    payload: {product}
  })
  return (
    <ProductContext.Provider
      value={{ loading, error, productData: state.products, cartItems: state.cartItems,sortByPrice, searchByTitle,itemToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductDataProvider;
