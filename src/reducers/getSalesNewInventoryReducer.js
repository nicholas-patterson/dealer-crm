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
    default:
      return state;
  }
};
