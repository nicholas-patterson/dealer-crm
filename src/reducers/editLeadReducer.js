// const initialState = {
//   updatedLead: {},
//   isLoading: false,
//   //token: localStorage.getItem("token"),
//   error: ""
// };

// export const editLeadReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "EDIT_LEAD_START":
//       return {
//         ...state,
//         isLoading: true
//         //token: localStorage.getItem("token")
//       };

//     case "EDIT_LEAD_SUCCESS":
//       return {
//         ...state,
//         isLoading: false,
//         updatedLead: action.payload
//       };

//     case "EDIT_LEAD_FAILURE":
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload
//       };
//     default:
//       return state;
//   }
// };
