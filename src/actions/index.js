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

export const getUserType = () => {
  return {
    type: "FETCH_USER_TYPE",
    payload: "salesman"
  };
};
