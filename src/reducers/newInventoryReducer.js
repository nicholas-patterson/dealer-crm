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
        newInventory: [...state.newInventory, action.payload]
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
        newInventory: [...state.newInventory]
      };

    case "GET_NEW_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "SEARCH_NEW_INV_SUCCESS":
      const result = state.newInventory.filter(newInv => {
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
        newInventory: [...result]
      };

    default:
      return state;
  }
};
