export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.item], // Assuming you meant to add just action.item to the basket
      };
    default:
      return state;
  }
};

export default reducer;
