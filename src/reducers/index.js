import { combineReducers } from "redux";
import { dealerNavigationReducer } from "./dealerNavigationReducer";
import { userReducer } from "./userReducer";
import { addLeadReducer } from "./addLeadReducer";
import { addSalespersonReducer } from "./addSalespersonReducer";
import { deleteSalespersonReducer } from "./deleteSalespersonReducer";
import { editLeadReducer } from "./editLeadReducer";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";

export default combineReducers({
  dealerNavigationReducer,
  userReducer,
  addLeadReducer,
  addSalespersonReducer,
  deleteSalespersonReducer,
  editLeadReducer,
  loginReducer,
  registerReducer
});
