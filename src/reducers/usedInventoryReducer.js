const initialState = {
  inventory: [],
  loading: null,
  error: ""
};

export const usedInventoryReducer = (state = initialState, action) => {
  console.log("STATE", state.inventory);
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
        inventory: [...state.inventory, action.payload]
      };

    case "ADD_USED_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "GET_USED_INV_START":
      return {
        ...state,
        loading: true
      };

    case "GET_USED_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        inventory: [...state.inventory]
      };

    case "GET_USED_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
