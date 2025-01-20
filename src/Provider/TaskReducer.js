import { SET_PRODUCTS, SORT_PRODUCTS } from "./action";

const TaskReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.payload;

    case SORT_PRODUCTS: {
      const { sortOrder } = action.payload;
      if (sortOrder === "low-to-high") {
        return [...state].sort((a, b) => a.price - b.price);
      }
      if(sortOrder === 'high-to-low'){
        return [...state].sort((a, b) => b.price - a.price);
      }
      return state; //default without sorting
    }
    default:
      return state;
  }
};
export { TaskReducer };
