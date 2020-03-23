import React, { useState } from "react";
import { Icon } from "@iconify/react";
import editOutline from "@iconify/icons-ant-design/edit-outline";
import deleteOutline from "@iconify/icons-ant-design/delete-outline";
import Portal from "../Portal";
import { connect } from "react-redux";
import { Link } from "@reach/router";

const DealerSingleLeadMain = ({
  lead,
  handleLeadDelete,
  index,
  user,
  props,
  leads,
  dealer_id
}) => {
  const [modal, setModal] = useState(false);
  const [leadEditInfo, setLeadEditInfo] = useState({
    lead_firstname: props.leads[index].lead_firstname || "",
    lead_lastname: props.leads[index].lead_lastname || "",
    lead_email: props.leads[index].lead_email || "",
    lead_phone: props.leads[index].lead_phone || "",
    lead_street: props.leads[index].lead_street || "",
    lead_city: props.leads[index].lead_city || "",
    lead_state: props.leads[index].lead_state || "",
    lead_type: props.leads[index].lead_type || "",
    dealer_id: null || dealer_id,
    salesman_lead: props.leads[index].salesman_lead || null,
    salesman_id: props.leads[index].salesman_id || null
  });

  // sets modal to true when click on edit button
  const handleLeadEdit = () => {
    setModal(true);
  };

  //submits edited lead
  const handleLeadsEditSubmit = e => {
    e.preventDefault();
    console.log("LEAD EDIT IN SUBMIT", leadEditInfo);
  };

  const handleEditLeadChange = e => {
    setLeadEditInfo({ ...leadEditInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      {modal ? (
        <Portal>
          <form className="leads-form" onSubmit={handleLeadsEditSubmit}>
            <div className="leads-field">
              <input
                type="text"
                id="first_name"
                name="lead_firstname"
                autoComplete="off"
                required
                className="leads-group"
                value={leadEditInfo.lead_firstname}
                onChange={handleEditLeadChange}
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
                value={leadEditInfo.lead_lastname}
                onChange={handleEditLeadChange}
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
                value={leadEditInfo.lead_street}
                onChange={handleEditLeadChange}
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
                value={leadEditInfo.lead_city}
                onChange={handleEditLeadChange}
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
                value={leadEditInfo.lead_state}
                onChange={handleEditLeadChange}
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
                value={leadEditInfo.lead_email}
                onChange={handleEditLeadChange}
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
                value={leadEditInfo.lead_phone}
                onChange={handleEditLeadChange}
              />
              <label htmlFor="inputField" className="leads-label-name">
                <span className="leads-content-name">Phone</span>
              </label>
            </div>

            <select
              id="leads-select"
              className="leads-group"
              onChange={handleEditLeadChange}
              value={leadEditInfo.lead_type}
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
              onClick={() => props.editLead(lead.id, leadEditInfo)}
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
            onClick={handleLeadEdit}
            className="edit-icon"
            icon={editOutline}
          />
        </td>
        <td className="delete-style">
          <Icon
            onClick={() => handleLeadDelete(lead.id)}
            className="del-icon"
            icon={deleteOutline}
          />
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, {})(DealerSingleLeadMain);
