const initialState = {
  salesNewInventory: [],
  loading: false,
  error: ""
};

export const getSalesNewInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SALESMAN_NEW_INVENTORY_START":
      return {
        ...state,
        loading: true
      };

    case "GET_SALESMAN_NEW_INVENTORY_SUCCESS":
      return {
        ...state,
        loading: false,
        salesNewInventory: [...action.payload]
      };

    case "GET_SALESMAN_NEW_INVENTORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "SEARCH_NEW_INV_SUCCESS":
      const result = state.salesNewInventory.filter(newInv => {
        if (
          newInv.year === action.payload.new_year &&
          newInv.make === action.payload.new_make &&
          newInv.model === action.payload.new_model
        ) {
          return newInv;
        }
      });
      return {
        ...state,
        loading: false,
        salesNewInventory: [...result]
      };
    default:
      return state;
  }
};
