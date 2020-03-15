const initialState = {
  salesUsedInventory: [],
  loading: false,
  error: ""
};

export const getSalesUsedInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SALESMAN_USED_INVENTORY_START":
      return {
        ...state,
        loading: true
      };

    case "GET_SALESMAN_USED_INVENTORY_SUCCESS":
      return {
        ...state,
        loading: false,
        salesUsedInventory: [...action.payload]
      };

    case "GET_SALESMAN_USED_INVENTORY_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "SEARCH_NEW_INV_SUCCESS":
      const result = state.salesUsedInventory.filter(newInv => {
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
        salesUsedInventory: [...result]
      };
    default:
      return state;
  }
};
