const router = require("express").Router();
const db = require("../models");
const emitter = require("../config/io");

// Get All Used inventory
router.get("/", async (req, res) => {
  try {
    const inventory = await db.Inventory.findAll();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Used Inventory By Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await db.Inventory.findOne({
      where: {
        id
      }
    });
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Used Inventory By Dealer ID
router.post("/add", async (req, res) => {
  console.log("REQ.SESSION IN  INVENTORY", req.session);
  try {
    const newInventory = await db.Inventory.create({
      car_picture: req.session.image.car_picture,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
      price: req.body.price,
      miles: req.body.miles,
      info: req.body.info,
      dealer_id: req.session.dealer_user.id,
      image_id: req.session.image.id
    });
    console.log(newInventory);
    res.status(201).json(newInventory);
    // Notification that dealer added an item to Used Inventory
    emitter.emitToDealer(req.session.dealer_user.id, "used_inventory_added", {
      inventory: newInventory,
      message: "You added an item to used inventory"
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// View all used inv
router.get("/all/view", async (req, res) => {
  try {
    const inventory = await db.Inventory.findAll({
      include: {
        model: db.Image,
        where: {
          dealer_id: req.session.dealer_user.id
        }
      }
    });
    console.log("IDEK", inventory);
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Used Inventory
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.Inventory.findOne({
    where: {
      id
    }
  })
    .then(inventory => {
      console.log("INVENORY IN DELETE", inventory);
      if (inventory === null) {
        res
          .status(400)
          .json({ warning: "Inventory with that if was not found" });
      }
      return db.Inventory.destroy({
        where: {
          id
        }
      })
        .then(deletedInventory => {
          console.log("DELETED INVENTORY", deletedInventory);
          if (deletedInventory === 1) {
            emitter.emitToDealer(
              inventory.dealer_id,
              "used_inventory_deleted",
              {
                inventory: inventory,
                message: "You deleted an item from used inventory"
              }
            );
            res.status(200).json({ deletedInventory: inventory });
            // Notification that dealer has deleted a used inventory item
          }
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
