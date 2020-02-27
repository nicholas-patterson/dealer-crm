const initialState = {
  inventory: [],
  loading: null,
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
        inventory: [...action.payload]
      };

    case "GET_USED_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "DELETE_USED_INV_START":
      return {
        ...state,
        loading: true
      };

    case "DELETE_USED_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        inventory: state.inventory.filter(inv => {
          return inv.id !== action.payload.id;
        })
      };

    case "DELETE_USED_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "SEARCH_USED_INV_SUCCESS":
      const result = state.newInventory.filter(usedInv => {
        if (
          usedInv.year === action.payload.new_year &&
          usedInv.make === action.payload.new_make &&
          usedInv.model === action.payload.new_model
        ) {
          return usedInv;
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
