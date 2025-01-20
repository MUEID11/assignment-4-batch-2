import { useEffect, useReducer } from "react";
import { ProductContext } from "../context";
import useProducts from "../Hooks/useProducts";
import { TaskReducer } from "./TaskReducer";
import { SET_PRODUCTS, SORT_PRODUCTS } from "./action";
const initialState = [];

const ProductDataProvider = ({children}) => {
  const {loading, error, productData} = useProducts();
  console.log('form provider',productData);
  const [state, dispatch] = useReducer(TaskReducer, initialState);
  //setting product data to reducers state
  useEffect(()=>{
    if(productData && productData?.length > 0){
      dispatch({
        type: SET_PRODUCTS,
        payload: productData,
      })
    }
  }, [productData])

  //dispatch
  const sortByPrice = ( sortOrder) => dispatch({
    type: SORT_PRODUCTS,
    payload: { sortOrder}
  })
  return (
    <ProductContext.Provider value={{loading, error, productData: state, sortByPrice}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductDataProvider;