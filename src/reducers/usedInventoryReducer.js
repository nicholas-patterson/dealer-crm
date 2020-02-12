const initialState = {
  inventory: [],
  loading: false,
  error: ""
};

export const usedInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USED_INV_START":
      return {
        ...state,
        loading: true
      };

    case "ADD_USED_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        inventory: action.payload
      };

    case "ADD_USED_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
