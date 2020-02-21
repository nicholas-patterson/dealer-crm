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

    case "DELETE_IMAGE_START":
      return {
        ...state,
        loading: true
      };

    case "DELETE_IMAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        images: state.images.filter(img => {
          console.log("IMG IN REDUCER", img);
          console.log("ACTION PAYLOAD IN IMG REDUCER", action.payload);
          return img.id !== action.payload.id;
        })
      };

    case "DELETE_IMAGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
