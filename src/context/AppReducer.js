export const AppReducer = (state, action) => {
  // [
  //   {id:1, title: "men", qty: 2},
  //   {id:2, title: "women"},
  // ]
  switch (action.type) {
    // {
  //   products,
  //   cart: [],
  // }
  // {
  //   cart: []
  // }
    case "ADD_ITEM_TO_CART":
      return { ...state, cart: [...state.cart, action.payload]};
    case "REMOVE_ITEM_CART":
      // console.log("im in remove")
      return {...state, cart: state.cart.filter((item) => item.id !== action.payload.id)};
    // case "INC_QTY":
    // //
    // case "DEC_QTY":
    // //
    default:
      return state;
  }
};
