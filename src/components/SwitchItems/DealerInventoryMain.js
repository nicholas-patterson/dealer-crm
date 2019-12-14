import React, { useState } from "react";

const DealerInventoryMain = () => {
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

  return (
    <>
      <div className="header-dealer">
        <div className="header-dealer__name">Dealership: Ford</div>
        <div className="header-dealer__notifications">Notifications</div>
      </div>

      {/* New Inventory */}

      <div className="new--inventory">
        <h3 className="new--inventory__title">New Inventory</h3>
        <div className="new--inventory__form">
          <form className="new-inventory__fields">
            <input
              type="text"
              name="new_year"
              id="new_year"
              value={newInventory.new_year}
              onChange={handleNewInventoryChange}
            />
            <label htmlFor="new_year" className="label-name">
              <span className="content-name">Year</span>
            </label>

            <input
              type="text"
              name="new_make"
              id="new_make"
              value={newInventory.new_make}
              onChnage={handleNewInventoryChange}
            />
            <label htmlFor="new_make">Make</label>
            <input
              type="text"
              name="new_model"
              id="new_model"
              value={newInventory.new_model}
              onChange={handleNewInventoryChange}
            />
            <label htmlFor="new_model">Model</label>
          </form>
        </div>
        <div className="new--inventory__results">
          <h2>
            You don't have any new inventory{" "}
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
          <form className="used-inventory__fields">
            <input
              type="text"
              name="used_year"
              id="used_year"
              value={usedInventory.used_year}
              onChange={handleUsedInventoryChange}
            />
            <label htmlFor="used_year">Year</label>

            <input
              type="text"
              name="new_make"
              id="used_make"
              value={usedInventory.used_make}
              onChnage={handleUsedInventoryChange}
            />
            <label htmlFor="used_make">Make</label>
            <input
              type="text"
              name="used_model"
              id="used_model"
              value={usedInventory.used_model}
              onChange={handleUsedInventoryChange}
            />
            <label htmlFor="used_model">Model</label>
          </form>
        </div>
        <div className="used--inventory__results">
          <h2>
            You don't have any used inventory{" "}
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
