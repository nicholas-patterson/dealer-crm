import React, { useState } from "react";
import { Icon } from "@iconify/react";
import editOutline from "@iconify/icons-ant-design/edit-outline";
import deleteOutline from "@iconify/icons-ant-design/delete-outline";
import Portal from "../Portal";
import { connect } from "react-redux";
import { Link } from "@reach/router";

const SalesSingleLeadMain = ({
  lead,
  handleSalesmanLeadDelete,
  index,
  user,
  props,
  leads,
  sales_dealer_id
}) => {
  const [modal, setModal] = useState(false);
  const [salesLeadEditInfo, setSalesLeadEditInfo] = useState({
    lead_firstname: leads[index].lead_firstname || "",
    lead_lastname: leads[index].lead_lastname || "",
    lead_email: leads[index].lead_email || "",
    lead_phone: leads[index].lead_phone || "",
    lead_street: leads[index].lead_street || "",
    lead_city: leads[index].lead_city || "",
    lead_state: leads[index].lead_state || "",
    lead_type: leads[index].lead_type || "",
    dealer_id: sales_dealer_id || null,
    salesman_lead: leads[index].salesman_lead || null,
    salesman_id: leads[index].salesman_id || null
  });

  const handleSalesLeadEdit = () => {
    setModal(true);
  };

  const handleSalesLeadEditSubmit = e => {
    e.preventDefault();
    console.log("LEAD EDIT IN SUBMIT", salesLeadEditInfo);
  };

  const handleEditSalesLeadChange = e => {
    setSalesLeadEditInfo({
      ...salesLeadEditInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {modal ? (
        <Portal>
          <form className="leads-form" onSubmit={handleSalesLeadEditSubmit}>
            <div className="leads-field">
              <input
                type="text"
                id="first_name"
                name="lead_firstname"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_firstname}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">First Name</span>
              </label>
            </div>

            <div className="leads-field">
              <input
                type="text"
                id="last_name"
                name="lead_lastname"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_lastname}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">Last Name</span>
              </label>
            </div>

            <div className="leads-field">
              <input
                type="text"
                id="street"
                name="lead_street"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_street}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">Street</span>
              </label>
            </div>
            <div className="leads-field">
              <input
                type="text"
                id="city"
                name="lead_city"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_city}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">City</span>
              </label>
            </div>
            <div className="leads-field">
              <input
                type="text"
                id="state"
                name="lead_state"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_state}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">State</span>
              </label>
            </div>
            <div className="leads-field">
              <input
                type="email"
                id="email"
                name="lead_email"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_email}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">Email</span>
              </label>
            </div>
            <div id="phone-column" className="leads-field">
              <input
                type="phone"
                id="leads-phone"
                name="lead_phone"
                autoComplete="off"
                required
                className="leads-group"
                value={salesLeadEditInfo.lead_phone}
                onChange={handleEditSalesLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">Phone</span>
              </label>
            </div>

            <select
              id="leads-select"
              className="leads-group"
              onChange={handleEditSalesLeadChange}
              value={salesLeadEditInfo.lead_type}
              name="lead_type"
            >
              <option value="">Select</option>
              <option value="walk-in">Walk-in</option>
              <option value="referral">Referral</option>
              <option value="online">Online</option>
            </select>

            <Link
              onClick={() => setModal(false)}
              className="leads-closeBtn"
              to={user === "salesman" ? "/sales/dash" : "/dealer/dash"}
            >
              Close
            </Link>

            <button
              onClick={() => props.editSalesLead(lead.id, salesLeadEditInfo)}
              type="submit"
              className="leads-submitBtn"
            >
              Submit
            </button>
          </form>
        </Portal>
      ) : null}
      <tr>
        <td>
          {lead.lead_firstname} {lead.lead_lastname}
        </td>
        <td>
          {lead.lead_street}, {lead.lead_city}, {lead.lead_state}{" "}
        </td>
        <td>{lead.lead_type}</td>
        <td className="edit-style">
          <Icon
            onClick={handleSalesLeadEdit}
            className="edit-icon"
            icon={editOutline}
          />
        </td>
        <td className="delete-style">
          <Icon
            onClick={() => handleSalesmanLeadDelete(lead.id)}
            className="del-icon"
            icon={deleteOutline}
          />
        </td>
      </tr>
    </>
  );
};

export default connect(null, null)(SalesSingleLeadMain);
