const initialState = {
  isLoading: false,
  deletedSalesperson: [],
  message: ""
};

export const deleteSalespersonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_SALESPERSON_START":
      return {
        ...state,
        isLoading: true,
        message: ""
      };

    case "DELETE_SALESPERSON_SUCCESS":
      return {
        ...state,
        isLoading: false,
        message: "Salesperson deleted Successfully",
        deletedSalesperson: action.payload
      };
    case "DELETED_SALESPERSON_FAILURE":
      return {
        ...state,
        isLoading: false,
        message: "Salesperson not deleted. Try again"
      };
    default:
      return state;
  }
};
