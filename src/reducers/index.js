import { combineReducers } from "redux";
import { dealerNavigationReducer } from "./dealerNavigationReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  dealerNavigationReducer,
  userReducer
});
