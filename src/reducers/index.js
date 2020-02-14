import { combineReducers } from "redux";
import { dealerNavigationReducer } from "./dealerNavigationReducer";
import { userReducer } from "./userReducer";
import { addLeadReducer } from "./addLeadReducer";
import { addSalespersonReducer } from "./addSalespersonReducer";
import { deleteSalespersonReducer } from "./deleteSalespersonReducer";
//import { editLeadReducer } from "./editLeadReducer";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { salesLoginReducer } from "./salesLoginReducer";
import { getDealerLeadReducer } from "./getDealerLeadReducer";
import { imageReducer } from "./imageReducer";
import { usedInventoryReducer } from "./usedInventoryReducer";
import { newInventoryReducer } from "./newInventoryReducer";

export default combineReducers({
  dealerNavigationReducer,
  userReducer,
  addLeadReducer,
  addSalespersonReducer,
  deleteSalespersonReducer,
  //editLeadReducer,
  loginReducer,
  registerReducer,
  salesLoginReducer,
  getDealerLeadReducer,
  imageReducer,
  usedInventoryReducer,
  newInventoryReducer
});
