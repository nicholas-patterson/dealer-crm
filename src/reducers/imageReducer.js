const initialState = {
  images: [],
  loading: false,
  error: ""
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_IMAGE_START":
      return {
        ...state,
        loading: true
      };

    case "ADD_IMAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        images: [action.payload, ...state.images]
      };

    case "ADD_IMAGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "GET_IMAGE_START":
      return {
        ...state,
        loading: true
      };

    case "GET_IMAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        images: action.payload
      };

    case "GET_IMAGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
