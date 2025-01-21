import { PRODUCTS_TO_CART, SEARCH_PRODUCTS, SET_PRODUCTS, SORT_PRODUCTS } from "./action";

const TaskReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    case SORT_PRODUCTS: {
      const { sortOrder } = action.payload;
      const sortedProducts = [...state.products].sort((a,b) => 
        sortOrder === 'low-to-high' ? a.price -b.price : b.price - a.price
      )
      return {
        ...state,
        products: sortedProducts
      }; //default without sorting
    }
    case SEARCH_PRODUCTS: {
      const { searchQuery } = action.payload;
      const filteredProducts = searchQuery.trim()
        ? state.products.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : state.products; // Return all products if searchQuery is empty
      return {
        ...state,
        products: filteredProducts,
      };
    }
    case PRODUCTS_TO_CART: {
      const {product} = action.payload;
      const isProductInCart = state.cartItems.find((item) => item.id === product.id);
      if(isProductInCart){
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== product.id)
        }
      }else{
        return {
          ...state,
          cartItems: [...state.cartItems, product]
        }
      }
    }
    default:
      return state;
  }
};
export { TaskReducer };
