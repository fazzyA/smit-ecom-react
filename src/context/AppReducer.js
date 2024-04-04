export const AppReducer = (state, action) => {
  // [
  //   {id:1, title: "men", qty: 2},
  //   {id:2, title: "women"},
  // ]
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const id = action.payload.id
      const temp = state.cart.some((item) => item.id === id)
      console.log("temp..", temp)
      // action.payload.qty += 1
      if(temp) {
        const arr = [...state.cart]
        const arr2 = arr.map((itm) => {
          if (itm.id === id) itm.qty +=1
          return itm
        })
        return { ...state, cart: [...arr2] };
      }

      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_ITEM_CART":
      // console.log("im in remove")
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "INC_QTY":
    //
    case "DEC_QTY":
    //
    default:
      return state;
  }
};
