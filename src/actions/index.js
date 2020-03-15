import axios from "axios";

// -- DONE
export const getDashboardLink = link => {
  return {
    type: "FETCH_DASHBOARD_LINK_SUCCESS",
    payload: link
  };
};

// -- DONE
export const getLeadsLink = link => {
  return {
    type: "FETCH_DASHBOARD_LINK_SUCCESS",
    payload: link
  };
};
// --DONE
export const getInventoryLink = link => {
  return {
    type: "FETCH_DASHBOARD_LINK_SUCCESS",
    payload: link
  };
};

// Get user type --DONE
export const getUserType = user => {
  return {
    type: "FETCH_USER_TYPE",
    payload: user
  };
};

export const clearError = () => {
  return {
    type: "CLEAR_ERROR"
  };
};

// Register DEALER Action --DONE
export const registerUser = (user, navigate) => {
  return dispatch => {
    dispatch({ type: "REG_USER_START" });
    axios
      .post("http://localhost:5000/api/dealer/register", user)
      .then(res => {
        dispatch({ type: "REG_USER_SUCCESS", payload: res.data });
        navigate("/login");
      })
      .catch(err => {
        dispatch({
          type: "REG_USER_FAILURE",
          payload: err.response
        });
      });
  };
};

// Register SALESMAN ACTION --DONE
export const registerSalesman = (user, navigate) => {
  return dispatch => {
    dispatch({ type: "REG_SALESMAN_START" });
    axios
      .post("http://localhost:5000/api/sales/register", user, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "REG_SALESMAN_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: "REG_SALESMAN_FAILURE",
          payload: err.response
        });
      });
  };
};

/// Login DEALER User Action --DONE
export const loginUser = (user, navigate) => {
  return dispatch => {
    dispatch({ type: "LOGIN_USER_START" });
    axios
      .post("http://localhost:5000/api/dealer/login", user, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
        navigate("/dealer/dash");
      })
      .catch(err => {
        dispatch({ type: "LOGIN_USER_FAILURE", payload: err.response });
      });
  };
};

// Login SALESMAN User Action --DONE
export const salesLoginUser = (user, navigate) => {
  return dispatch => {
    dispatch({ type: "LOGIN_SALES_USER_START" });
    axios
      .post("http://localhost:5000/api/sales/login", user, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "LOGIN_SALES_USER_SUCCESS", payload: res.data });
        navigate("/sales");
      })
      .catch(err => {
        dispatch({ type: "LOGIN_SALES_USER_FAILURE", payload: err.response });
      });
  };
};

// GET ALL SALESMAN --DONE
export const getSalesmans = () => {
  return dispatch => {
    dispatch({ type: "GET_SALESMANS_START" });
    axios
      .get("http://localhost:5000/api/sales/salesmans", {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "GET_SALESMANS_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "GET_SALESMANS_FAILURE", payload: err.response });
      });
  };
};

/// Logout User Action

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER_SUCCESS"
  };
};

// Get Leads by Dealer -- DONE
export const getDealerLeads = () => {
  return dispatch => {
    dispatch({ type: "GET_DEALER_LEADS_START" });
    axios
      .get("http://localhost:5000/api/dealer/all/leads", {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "GET_DEALER_LEADS_SUCCESS", payload: res.data.Leads });
      })
      .catch(err => {
        dispatch({ type: "GET_DEALER_LEADS_FAILURE", payload: err.repsonse });
      });
  };
};

// Add New Lead Action For Dealer --DONE
export const addLead = (lead, navigate) => {
  return dispatch => {
    dispatch({ type: "ADD_LEAD_START" });
    axios
      .post("http://localhost:5000/api/leads/add", lead, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "ADD_LEAD_SUCCESS", payload: res.data });
        navigate("/dealer/dash");
      })
      .catch(err => {
        dispatch({ type: "ADD_LEAD_FAILURE", payload: err.response });
      });
  };
};

//Add New Lead Action For Salesman --DONE
export const addSalesLead = (lead, navigate) => {
  return dispatch => {
    dispatch({ type: "ADD_SALES_LEAD_START" });
    axios
      .post("http://localhost:5000/api/leads/sales/add", lead, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "ADD_SALES_LEAD_SUCCESS", payload: res.data });
        navigate("/sales/dash");
      })
      .catch(err => {
        dispatch({ type: "ADD_SALES_LEAD_FAILURE", payload: err.response });
      });
  };
};

// Delete Lead Action --DONE
export const deleteLead = id => {
  return dispatch => {
    dispatch({ type: "DELETE_LEAD_START" });
    axios
      .delete(`http://localhost:5000/api/leads/remove/${id}`, {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "DELETE_LEAD_SUCCESS",
          payload: res.data.deletedLead
        });
      })
      .catch(err => {
        dispatch({ type: "DELETE_LEAD_FAILURE", payload: err.response });
      });
  };
};

// Edit Lead Action -- DONE
export const editLead = (id, updatedInfo) => {
  return dispatch => {
    dispatch({ type: "EDIT_LEAD_START" });
    axios
      .put(`http://localhost:5000/api/leads/update/${id}`, updatedInfo, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "EDIT_LEAD_SUCCESS", payload: res.data.updatedBook });
      })
      .catch(err => {
        dispatch({ type: "EDIT_LEAD_FAILURE", payload: err.response });
      });
  };
};

// Add Image Action and Add Used Inventory For Dealer --DONE
export const addImage = (imageData, usedInv) => {
  return dispatch => {
    dispatch({ type: "ADD_IMAGE_START" });
    axios
      .post("http://localhost:5000/api/image/add", imageData, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "ADD_IMAGE_SUCCESS", payload: res.data });
        return axios
          .post("http://localhost:5000/api/usedInventory/add", usedInv, {
            withCredentials: true
          })
          .then(res => {
            dispatch({ type: "ADD_USED_INV_SUCCESS", payload: res.data });
          })
          .catch(err => {
            dispatch({ type: "ADD_USED_INV_FAILURE", payload: err.response });
          });
      })
      .catch(err => {
        dispatch({ type: "ADD_IMAGE_FAILURE", payload: err.response });
      });
  };
};

// Get Used Inventory Action For Dealer --DONE
export const getUsedInventory = () => {
  return dispatch => {
    dispatch({ type: "GET_USED_INV_START" });
    axios
      .get("http://localhost:5000/api/usedInventory/all/view", {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "GET_USED_INV_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "GET_USED_INV_FAILURE", payload: err.resonse });
      });
  };
};

// Add NewImage and New Inventory For Dealer --DONE
export const addNewImage = (image, newInv) => {
  return dispatch => {
    dispatch({ type: "ADD_IMAGE_START" });
    axios
      .post("http://localhost:5000/api/image/add", image, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "ADD_IMAGE_SUCCESS", payload: res.data });
        return axios
          .post("http://localhost:5000/api/newInventory/add", newInv, {
            withCredentials: true
          })
          .then(res => {
            dispatch({ type: "ADD_NEW_INV_SUCCESS", payload: res.data });
          })
          .catch(err => {
            dispatch({ type: "ADD_NEW_INV_FAILURE", payload: err.response });
          });
      })
      .catch(err => {
        dispatch({ type: "ADD_IMAHE_FAILURE", payload: err.response });
      });
  };
};

//Get New Inventory Action For Dealer --DONE
export const getNewInventory = () => {
  return dispatch => {
    dispatch({ type: "GET_NEW_INV_START" });
    axios
      .get("http://localhost:5000/api/newInventory/all/view", {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "GET_NEW_INV_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "GET_NEW_INV_FAILURE", payload: err.response });
      });
  };
};

//Delete Used Inventory and Image Action For Dealer --DONE
export const deleteUsedInv = (usedInvId, picId) => {
  return dispatch => {
    dispatch({ type: "DELETE_USED_INV_START" });
    axios
      .delete(`http://localhost:5000/api/usedInventory/delete/${usedInvId}`, {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "DELETE_USED_INV_SUCCESS",
          payload: res.data.deletedInventory
        });
        return axios
          .delete(`http://localhost:5000/api/image/delete/${picId}`, {
            withCredentials: true
          })
          .then(res => {
            dispatch({ type: "DELETE_IMAGE_SUCCESS", payload: res.data });
          })
          .catch(err => {
            dispatch({ type: "DELETE_IMAGE_FAILURE", payload: err.response });
          });
      })
      .catch(err => {
        dispatch({ type: "DELETE_USED_INV_FAILURE", payload: err.response });
      });
  };
};

//Delete New Inventory and Image Action For Dealer --DONE
export const deleteNewInv = (newInvId, picId) => {
  return dispatch => {
    dispatch({ type: "DELETE_NEW_INV_START" });
    axios
      .delete(`http://localhost:5000/api/newInventory/delete/${newInvId}`, {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "DELETE_NEW_INV_SUCCESS",
          payload: res.data.deletedInventory
        });
        return axios
          .delete(`http://localhost:5000/api/image/delete/${picId}`, {
            withCredentials: true
          })
          .then(res => {
            dispatch({ type: "DELETE_IMAGE_SUCCESS", payload: res.data });
          })
          .catch(err => {
            dispatch({ type: "DELETE_IMAGE_FAILURE", payload: err.response });
          });
      })
      .catch(err => {
        dispatch({ type: "DELETE_NEW_INV_FAILURE", payload: err.response });
      });
  };
};

export const newSearchFilter = term => {
  return {
    type: "SEARCH_NEW_INV_SUCCESS",
    payload: term
  };
};

export const usedSearchFilter = term => {
  return {
    type: "SEARCH_USED_INV_SUCCESS",
    payload: term
  };
};

// Update Email For Dealer --DONE
export const updateEmail = newEmail => {
  return dispatch => {
    dispatch({ type: "UPDATE_EMAIL_START" });
    axios
      .put("http://localhost:5000/api/dealer/email/update", newEmail, {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "UPDATE_EMAIL_SUCCESS",
          payload: res.data.updatedEmail.dealer_email
        });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_EMAIL_FAILURE", payload: err.response });
      });
  };
};

// Update Password For Dealer --DONE
export const updatePassword = newPassword => {
  return dispatch => {
    dispatch({ type: "UPDATE_EMAIL_START" });
    axios
      .put("http://localhost:5000/api/dealer/password/update", newPassword, {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "UPDATE_PASSWORD_SUCCESS",
          payload: res.data.pass.dealer_password
        });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PASSWORD_FAILURE", payload: err.response });
      });
  };
};

// Get Leads by Salesman For Salesman --DONE
export const getSalesmanLeads = () => {
  return dispatch => {
    dispatch({ type: "GET_SALES_LEADS_START" });
    axios
      .get("http://localhost:5000/api/sales/all/leads", {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "GET_SALES_LEADS_SUCCESS",
          payload: res.data.Leads
        });
      })
      .catch(err => {
        dispatch({ type: "GET_SALES_LEADS_FAILURE", payload: err.response });
      });
  };
};

// Edit Salesman Leads For Salesman --DONE
export const editSalesLead = (lead_id, lead_info) => {
  return dispatch => {
    dispatch({ type: "EDIT_SALES_LEADS_START" });
    axios
      .put(
        `http://localhost:5000/api/leads/update/sales/${lead_id}`,
        lead_info,
        {
          withCredentials: true
        }
      )
      .then(res => {
        dispatch({ type: "EDIT_SALES_LEADS_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "EDIT_SALES_LEADS_FAILURE", payload: err.response });
      });
  };
};

// Delete Salesman Lead For Salesman -- DONE
export const deleteSalesmanLead = lead_id => {
  return dispatch => {
    dispatch({ type: "DELETE_SALESMAN_LEAD_START" });
    axios
      .delete(`http://localhost:5000/api/leads/remove/sales/${lead_id}`, {
        withCredentials: true
      })
      .then(res => {
        dispatch({ type: "DELETE_SALESMAN_LEAD_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: "DELETE_SALESMAN_LEAD_FAILURE",
          payload: err.response
        });
      });
  };
};

// Get All Dealer New Inventory For Salesman
export const getNewInventorySales = () => {
  return dispatch => {
    dispatch({ type: "GET_SALESMAN_NEW_INVENTORY_START" });
    axios
      .get("http://localhost:5000/api/sales/newInventory/all", {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "GET_SALESMAN_NEW_INVENTORY_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: "GET_SALESMAN_NEW_INVENTORY_FAILURE", payload: err });
      });
  };
};

// Get All Dealer Used Inventory For Salesman
export const getUsedInventorySales = () => {
  return dispatch => {
    dispatch({ type: "GET_SALESMAN_USED_INVENTORY_START" });
    axios
      .get("http://localhost:5000/api/sales/usedInventory/all", {
        withCredentials: true
      })
      .then(res => {
        dispatch({
          type: "GET_SALESMAN_USED_INVENTORY_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({ type: "GET_SALESMAN_USED_INVENTORY_FAILURE", payload: err });
      });
  };
};
