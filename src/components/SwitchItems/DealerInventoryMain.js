import React, { useState } from "react";
import { Link } from "@reach/router";
import Portal from "../Portal";
import {connect} from "react-redux";

const DealerInventoryMain = props => {
  console.log("PROPS IN INV", props)
  // new inventory state search
  const [newInventory, setNewInventory] = useState({
    new_year: "",
    new_make: "",
    new_model: ""
  });
  // used inventory state search
  const [usedInventory, setUsedInventory] = useState({
    used_year: "",
    used_make: "",
    used_model: ""
  });

  // used inventory add state
  const [usedInventoryAdd, setUsedInventoryAdd] = useState({
    car_picture: "",
    year: "",
    make: "",
    model: "",
    price: "",
    miles: ""
  });

   // new inventory add state
   const [newInventoryAdd, setNewInventoryAdd] = useState({
    car_picture: "",
    year: "",
    make: "",
    model: "",
    price: "",
    miles: ""
  });

  console.log("FILE",usedInventoryAdd)

  // new inventory search
  const handleNewInventoryChange = e => {
    setNewInventory({ ...newInventory, [e.target.name]: e.target.value });
  };

  // used inventory search
  const handleUsedInventoryChange = e => {
    setUsedInventory({ ...usedInventory, [e.target.name]: e.target.value });
  };

  // on click for new inventory
  const handleNewInventoryAdd = e => {
    setShowNewInventoryModal(true);
    setNewInventoryAdd({...newInventoryAdd, [e.target.name]:e.target.value})

  };
  // on click for used inventory
  const handleUsedInventoryAdd = e => {
    setShowUsedInventoryModal(true);
    setUsedInventoryAdd({
      ...usedInventoryAdd,
      [e.target.name]: e.target.value
    });
  };

  
  // Set inventory state to false
  const [showUsedInventoryModal, setShowUsedInventoryModal] = useState(false);
  const [showNewInventoryModal, setShowNewInventoryModal] = useState(false);

  // handle used inventory close button
  const handleUsedInventoryCloseButton = () => {
    setShowUsedInventoryModal(false);
  }

  const handleNewInventoryCloseButton = () => {
    setShowNewInventoryModal(false);
  }

  return (
    <>
      {showUsedInventoryModal ? (
        <Portal>
          <form className="usedInventoryAddForm">
            <div className="usedInv-field" id="picture_file">
              <input
                type="file"
                id="car_picture"
                name="car_picture"
                className="usedInv-group"
                value={usedInventoryAdd.car_picture}
                onChange={handleUsedInventoryAdd}
              />
              <label for="car_picture">Upload file</label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="year"
                name="year"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInventoryAdd.year}
                onChange={handleUsedInventoryAdd}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Year</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="make"
                name="make"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInventoryAdd.make}
                onChange={handleUsedInventoryAdd}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Make</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="model"
                name="model"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInventoryAdd.model}
                onChange={handleUsedInventoryAdd}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Model</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="price"
                name="price"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInventoryAdd.price}
                onChange={handleUsedInventoryAdd}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Price</span>
              </label>
            </div>

            <div className="usedInv-field">
              <input
                type="text"
                id="miles"
                name="miles"
                autoComplete="off"
                required
                className="usedInv-group"
                value={usedInventoryAdd.miles}
                onChange={handleUsedInventoryAdd}
              />
              <label htmlFor="inputField" className="usedInv-label-name">
                <span className="usedInv-content-name">Miles</span>
              </label>
            </div>

            <textarea type="car info" name="info"></textarea>

            <Link className="usedInv-closeBtn" onClick={handleUsedInventoryCloseButton} to={props.user === "salesman" ? "/sales/dash" : "/dealer/inventory"}>
                Close
              </Link>

            <button className="usedInv-submitBtn">Submit</button>
          </form>
        </Portal>
      ) : null}
      {showNewInventoryModal ? (
        <Portal>
          <form className="newInventoryAddForm">
          <div className="newInv-field" id="picture_file">
              <input
                type="file"
                id="car_picture"
                name="car_picture"
                className="newInv-group"
                value={newInventoryAdd.car_picture}
                onChange={handleNewInventoryAdd}
              />
              <label for="car_picture">Upload file</label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="year"
                name="year"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.year}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Year</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="make"
                name="make"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.make}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Make</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="model"
                name="model"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.model}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Model</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="price"
                name="price"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.price}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Price</span>
              </label>
            </div>

            <div className="newInv-field">
              <input
                type="text"
                id="miles"
                name="miles"
                autoComplete="off"
                required
                className="newInv-group"
                value={newInventoryAdd.miles}
                onChange={handleNewInventoryAdd}
              />
              <label htmlFor="inputField" className="newInv-label-name">
                <span className="newInv-content-name">Miles</span>
              </label>
            </div>

            <textarea type="car info" name="info"></textarea>

            <Link className="newInv-closeBtn" onClick={handleNewInventoryCloseButton} to={props.user === "salesman" ? "/sales/dash" : "/dealer/inventory"}>
                Close
              </Link>

            <button className="newInv-submitBtn">Submit</button>
          </form>
        </Portal>
      ) : null}
      <div className="header-dealer">
        <div className="header-dealer__name">Dealership: Ford</div>
        <div className="header-dealer__notifications">Notifications</div>
      </div>

      {/* New Inventory */}

      <div className="new--inventory">
        <h3 className="new--inventory__title">New Inventory</h3>
        <div className="new--inventory__form">
          <form className="new--inventory__fields form">
            <div className="field">
              <input
                type="text"
                name="new_year"
                id="new_year"
                autoComplete="off"
                required
                className="input-group"
                value={newInventory.new_year}
                onChange={handleNewInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Year</span>
              </label>
            </div>

            <div className="field">
              <input
                type="text"
                name="new_make"
                id="new_make"
                autoComplete="off"
                required
                className="input-group"
                value={newInventory.new_make}
                onChnage={handleNewInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Make</span>
              </label>
            </div>
            <div className="field">
              <input
                type="text"
                name="new_model"
                id="new_model"
                autoComplete="off"
                required
                className="input-group"
                value={newInventory.new_model}
                onChange={handleNewInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Model</span>
              </label>
            </div>
          </form>
        </div>
        <div className="new--inventory__results">
          <h3>
            No New Inventory, Click{" "}
            <Link
              onClick={handleNewInventoryAdd}
              to="/dealer/inventory/NewInventory"
            >
              <span className="newInventoryAddLink">Here</span>{" "}
            </Link>
            To Add{" "}
            <span role="img" aria-label="crying">
              😢
            </span>
          </h3>
        </div>
      </div>

      {/* Used Inventory */}

      <div className="used--inventory">
        <h3 className="used--inventory__title">Used Inventory</h3>
        <div className="used--inventory__form">
          <form className="used-inventory__fields form">
            <div className="field">
              <input
                type="text"
                name="used_year"
                id="used_year"
                autoComplete="off"
                required
                className="input-group"
                value={usedInventory.used_year}
                onChange={handleUsedInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Year</span>
              </label>
            </div>
            <div className="field">
              <input
                type="text"
                name="new_make"
                id="used_year"
                autoComplete="off"
                required
                className="input-group"
                value={usedInventory.used_make}
                onChnage={handleUsedInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Make</span>
              </label>
            </div>
            <div className="field">
              <input
                type="text"
                name="used_model"
                id="used_model"
                autoComplete="off"
                required
                className="input-group"
                value={usedInventory.used_model}
                onChange={handleUsedInventoryChange}
              />
              <label htmlFor="inputField" className="label-name">
                <span className="content-name">Model</span>
              </label>
            </div>
          </form>
        </div>
        <div className="used--inventory__results">
          <h3>
            No Used Inventory, Click{" "}
            <Link
              onClick={handleUsedInventoryAdd}
              to="/dealer/inventory/UsedInventory"
            >
              <span className="usedInventoryAddLink"> Here </span>{" "}
            </Link>
            To Add{" "}
            <span role="img" aria-label="crying">
              😢
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

export default connect(mapStateToProps, {})(DealerInventoryMain);
