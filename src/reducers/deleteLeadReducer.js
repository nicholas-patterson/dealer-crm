// const initialState = {
//   isLoading: false,
//   deletedLead: [],
//   message: ""
// };

// export const deleteLeadReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "DELETE_LEAD_START":
//       return {
//         ...state,
//         isLoading: true,
//         message: ""
//       };

//     case "DELETE_LEAD_SUCCESS":
//       console.log("ACTION", action);
//       return {
//         ...state,
//         isLoading: false,
//         message: "Lead deleted Successfully",
//         deletedLead: [...state.deletedLead]
//       };
//     case "DELETED_LEAD_FAILURE":
//       return {
//         ...state,
//         isLoading: false,
//         message: "Lead not deleted. Try again"
//       };
//     default:
//       return state;
//   }
// };
