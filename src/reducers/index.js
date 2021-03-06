import { combineReducers } from "redux";
import { dealerNavigationReducer } from "./dealerNavigationReducer";
import { userReducer } from "./userReducer";
import { addLeadReducer } from "./addLeadReducer";
import { addSalespersonReducer } from "./addSalespersonReducer";
import { deleteSalespersonReducer } from "./deleteSalespersonReducer";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";
import { salesLoginReducer } from "./salesLoginReducer";
import { getDealerLeadReducer } from "./getDealerLeadReducer";
import { imageReducer } from "./imageReducer";
import { usedInventoryReducer } from "./usedInventoryReducer";
import { newInventoryReducer } from "./newInventoryReducer";
import { salesRegisterReducer } from "./salesRegisterReducer";
import { getSalesLeadReducer } from "./getSalesLeadReducer";
import { getSalesNewInventoryReducer } from "./getSalesNewInventoryReducer";
import { getSalesUsedInventoryReducer } from "./getSalesUsedInventoryReducer";
import { getDealerNotificationsReducer } from "./getDealerNotificationsReducer";
import { getSalesmanNotificationReducer } from "./getSalesmanNotificationReducer";

export default combineReducers({
  dealerNavigationReducer,
  userReducer,
  addLeadReducer,
  addSalespersonReducer,
  deleteSalespersonReducer,
  loginReducer,
  registerReducer,
  salesLoginReducer,
  getDealerLeadReducer,
  getSalesLeadReducer,
  imageReducer,
  usedInventoryReducer,
  newInventoryReducer,
  salesRegisterReducer,
  getSalesNewInventoryReducer,
  getSalesUsedInventoryReducer,
  getDealerNotificationsReducer,
  getSalesmanNotificationReducer
});
