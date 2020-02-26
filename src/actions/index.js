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

// Register User Action --DONE
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
        dispatch({ type: "REG_USER_FAILURE", payload: err.data });
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
        console.log("RES IN LOGIN ACTION", res.data);
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
        navigate("/dealer/dash");
      })
      .catch(err => {
        dispatch({ type: "LOGIN_USER_FAILURE", payload: err.response });
      });
  };
};

// Login SALES User Action --DONE
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

// Add Image Action and Add Used Inventory
export const addImage = (imageData, usedInv) => {
  console.log("IMAGE DATA IN ACTION", imageData);
  return dispatch => {
    dispatch({ type: "ADD_IMAGE_START" });
    axios
      .post("http://localhost:5000/api/image/add", imageData, {
        withCredentials: true
      })
      .then(res => {
        console.log("RES IN IMAGE ADD", res);
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

// Get Used Inventory Action
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

// Add NewImage and New Inventory
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

//Get New Inventory Action
export const getNewInventory = () => {
  return dispatch => {
    dispatch({ type: "GET_NEW_INV_START" });
    axios
      .get("http://localhost:5000/api/newInventory/all/view", {
        withCredentials: true
      })
      .then(res => {
        console.log("RES IN NEW INV", res.data);
        dispatch({ type: "GET_NEW_INV_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "GET_NEW_INV_FAILURE", payload: err.resonse });
      });
  };
};

//Delete Used Inventory and Image Action
export const deleteUsedInv = (usedInvId, picId) => {
  return dispatch => {
    dispatch({ type: "DELETE_USED_INV_START" });
    axios
      .delete(`http://localhost:5000/api/usedInventory/delete/${usedInvId}`, {
        withCredentials: true
      })
      .then(res => {
        console.log(res.data.deletedInventory);
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

//Delete New Inventory and Image Action
export const deleteNewInv = (newInvId, picId) => {
  return dispatch => {
    dispatch({ type: "DELETE_NEW_INV_START" });
    axios
      .delete(`http://localhost:5000/api/newInventory/delete/${newInvId}`, {
        withCredentials: true
      })
      .then(res => {
        console.log(res.data.deletedInventory);
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

export const updateEmail = newEmail => {
  return dispatch => {
    dispatch({ type: "UPDATE_EMAIL_START" });
    axios
      .put("http://localhost:5000/api/dealer/email/update", newEmail, {
        withCredentials: true
      })
      .then(res => {
        console.log("RES IN EMAIL UPDATE ACTION", res.data);
        dispatch({
          type: "UPDATE_EMAIL_SUCCESS",
          payload: res.data.updatedEmail.dealer_email
        });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_EMAIL_FAILURE", err });
      });
  };
};

export const updatePassword = newPassword => {
  return dispatch => {
    dispatch({ type: "UPDATE_EMAIL_START" });
    axios
      .put("http://localhost:5000/api/dealer/password/update", newPassword, {
        withCredentials: true
      })
      .then(res => {
        console.log("RES IN PASSWORD ACTION", res.data);
        dispatch({
          type: "UPDATE_PASSWORD_SUCCESS",
          payload: res.data.pass.dealer_password
        });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_PASSWORD_FAILURE", payload: err });
      });
  };
};
