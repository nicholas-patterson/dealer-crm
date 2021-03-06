const initialState = {
  person: [],
  isLoading: false,
  error: ""
};

export const addSalespersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SALESPERSON_START":
      return {
        ...state,
        isLoading: false
      };
    case "ADD_SALESPERSON_SUCCESS":
      return {
        ...state,
        isLoading: true,
        person: action.payload
      };
    case "ADD_SALESPERSON_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case "GET_SALESMANS_START":
      return {
        ...state,
        isLoading: true
      };

    case "GET_SALESMANS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        person: action.payload
      };

    case "GET_SALESMANS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
