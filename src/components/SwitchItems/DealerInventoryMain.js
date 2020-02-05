import React, { useState } from "react";
import {Link} from "@reach/router";
import Portal from "../Portal";

const DealerInventoryMain = (props) => {
  
  const [newInventory, setNewInventory] = useState({
    new_year: "",
    new_make: "",
    new_model: ""
  });
  const [usedInventory, setUsedInventory] = useState({
    used_year: "",
    used_make: "",
    used_model: ""
  });

  const handleNewInventoryChange = e => {
    setNewInventory({ ...newInventory, [e.target.name]: e.target.value });
  };

  const handleUsedInventoryChange = e => {
    setUsedInventory({ ...usedInventory, [e.target.name]: e.target.value });
  };

  const handleNewInventoryAdd = e => {
    setShowNewInventoryModal(true);
  }

  const handleUsedInventoryAdd = e => {
    setShowUsedInventoryModal(true);
  }

  const [showUsedInventoryModal, setShowUsedInventoryModal] = useState(false);
  const [showNewInventoryModal, setShowNewInventoryModal] = useState(false);


  return (
    <>
    {showUsedInventoryModal ? 
     <Portal>
        <form>
          <input type="file" name="car_picture"/>
          <input type="text" name="year"/>
          <input type="text" name="make"/>
          <input type="text" name="model"/>
          <input type="text" name="price"/>
          <input type="text" name="miles"/>

          <textarea type="car info" name="info"></textarea>
        </form>
     </Portal>: null}
     {showNewInventoryModal ? 
     <Portal>
         <form>
          <input type="file" name="car_picture"/>
          <input type="text" name="year"/>
          <input type="text" name="make"/>
          <input type="text" name="model"/>
          <input type="text" name="price"/>
          <input type="text" name="miles"/>

          <textarea type="car info" name="info"></textarea>
        </form>
     </Portal>: null}
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
          <h2>
            No New Inventory, <Link onClick={handleNewInventoryAdd} to="/dealer/inventory/NewInventory">Click Here To Add</Link>{" "}
            <span role="img" aria-label="crying">
              😢
            </span>
          </h2>
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
          <h2>
            No Used Inventory, <Link onClick={handleUsedInventoryAdd} to="/dealer/inventory/UsedInventory">Click Here To Add</Link>{" "}
            <span role="img" aria-label="crying">
              😢
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default DealerInventoryMain;
