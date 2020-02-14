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

// Add Image Action
export const addImage = imageData => {
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
      .get("http://localhost:5000/api/dealer/all/usedinventory", {
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

//Get New Inventory Action
export const getNewInventory = () => {
  return dispatch => {
    dispatch({ type: "GET_NEW_INV_START" });
    axios
      .get("http://localhost:5000/api/dealer/all/newinventory", {
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

//Add Used Inventory Action --DONE
export const addUsedInventory = usedInventory => {
  return dispatch => {
    dispatch({ type: "ADD_USED_INV_START" });
    axios
      .post("http://localhost:5000/api/usedInventory/add", usedInventory, {
        withCredentials: true
      })
      .then(res => {
        console.log("RES IN ADD INVENTORY", res.data);
        dispatch({ type: "ADD_USED_INV_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ADD_USED_INV_FAILURE", payload: err.response });
      });
  };
};

// Add new Inventory
export const addNewInventory = newInventory => {
  return dispatch => {
    dispatch({ type: "ADD_NEW_INV_START" });
    axios
      .post("http://localhost:5000/api/newInventory/add", newInventory, {
        withCredentials: true
      })
      .then(res => {
        console.log("RES IN ADD NEW INVENTORY", res.data);
        dispatch({ type: "ADD_NEW_INV_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ADD_NEW_INV_FAILURE", payload: err.response });
      });
  };
};
