import axios from "axios";

export const getDashboardLink = link => {
  return {
    type: "FETCH_DASHBOARD_LINK_SUCCESS",
    payload: link
  };
};

export const getLeadsLink = link => {
  return {
    type: "FETCH_DASHBOARD_LINK_SUCCESS",
    payload: link
  };
};

export const getInventoryLink = link => {
  return {
    type: "FETCH_DASHBOARD_LINK_SUCCESS",
    payload: link
  };
};

// Get user type

export const getUserType = user => {
  return {
    type: "FETCH_USER_TYPE",
    payload: user
  };
};

// Register User Action
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

/// Login DEALER User Action
export const loginUser = (user, navigate) => {
  return dispatch => {
    dispatch({ type: "LOGIN_USER_START" });
    axios
      .post("http://localhost:5000/api/dealer/login", user)
      .then(res => {
        dispatch({ type: "LOGIN_USER_SUCCESS", payload: res.data });
        navigate("/dealer");
      })
      .catch(err => {
        dispatch({ type: "LOGIN_USER_FAILURE", payload: err.response });
      });
  };
};

// Login SALES User Action
export const salesLoginUser = (user, navigate) => {
  return dispatch => {
    dispatch({ type: "LOGIN_SALES_USER_START" });
    axios
      .post("http://localhost:5000/api/sales/login", user)
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

// Add New Lead Action
export const addLead = lead => {
  return dispatch => {
    dispatch({ type: "ADD_LEAD_START" });
    axios
      .post("__POST__ROUTE__TO__DB", lead)
      .then(res => {
        dispatch({ type: "ADD_LEAD_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ADD_LEAD_FAILURE", payload: err.response });
      });
  };
};

// Delete Lead Action
export const deleteLead = (/* takes a  id */) => {
  return dispatch => {
    dispatch({ type: "DELETE_LEAD_START" });
    axios
      .delete(`_DELETE_ROUTE__TO__DB`)
      .then(res => {
        dispatch({ type: "DELETE_LEAD_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "DELETE_LEAD_FAILURE", payload: err.response });
      });
  };
};

// Edit Lead Action
export const editLead = (/* takes a  id */) => {
  return dispatch => {
    dispatch({ type: "EDIT_LEAD_START" });
    axios
      .delete(`_EDIT_ROUTE__TO__DB`)
      .then(res => {
        dispatch({ type: "EDIT_LEAD_SUCCESS", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "EDIT_LEAD_FAILURE", payload: err.response });
      });
  };
};

// Get Lead To Edit

///  Get wedding To Edit

export const LeadToEdit = (/*id*/) => {
  return dispatch => {
    dispatch({ type: "GET_LTE_START" });
    axios
      .get("__GET__REQ__WIH__ID__TO__DB")
      .then(res => {
        dispatch({ type: "GET_LTE_SUCCESS", payload: res.data });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: "GET_LTE_FAILURE", payload: err.response });
      });
  };
};
