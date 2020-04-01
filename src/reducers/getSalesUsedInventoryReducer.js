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

    default:
      return state;
  }
};
