const initialState = {
  newInventory: [],
  loading: false,
  error: ""
};

export const newInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_INV_START":
      return {
        ...state,
        loading: true
      };

    case "ADD_NEW_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        newInventory: action.payload
      };

    case "ADD_NEW_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "GET_NEW_INV_START":
      return {
        ...state,
        loading: true
      };

    case "GET_NEW_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        newInventory: action.payload
      };

    case "GET_NEW_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
