export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    // case "REMOVE_ITEM_CART":
    // //
    // case "INCREASE":
    // //
    // case "DECREASE":
    // //
    default:
      return state;
  }
};
