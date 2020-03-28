const initialState = {
  newInventory: [],
  term: "",
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
        newInventory: [...action.payload]
      };

    case "GET_NEW_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "EDIT_NEW_INV_START":
      return {
        ...state,
        loading: true
      };

    case "EDIT_NEW_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        newInventory: state.newInventory.map(inv =>
          inv.id === action.payload.id ? action.payload : inv
        )
      };

    case "EDIT_NEW_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "DELETE_NEW_INV_START":
      return {
        ...state,
        loading: true
      };

    case "DELETE_NEW_INV_SUCCESS":
      return {
        ...state,
        loading: false,
        newInventory: state.newInventory.filter(newInv => {
          return newInv.id !== action.payload.id;
        })
      };

    case "DELETE_NEW_INV_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "SEARCH_NEW_INV_SUCCESS":
      const { term } = action;
      const results = state.newInventory.filter(newInv => {
        if (
          newInv.year.includes(term) ||
          newInv.make.includes(term) ||
          newInv.model.includes(term)
        ) {
          return newInv;
        }
      });

      let newInventory = results.map(inv => {
        console.log(inv);
        return inv;
      });

      console.log(results);
      return {
        ...state,
        loading: false,
        term,
        newInventory: [...newInventory]
      };
    default:
      return state;
  }
};
