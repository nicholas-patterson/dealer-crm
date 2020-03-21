const router = require("express").Router();
const db = require("../models");
const emitter = require("../config/io");

// Get All New Inventory
router.get("/", async (req, res) => {
  try {
    const inventory = await db.NewInventory.findAll();
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(er);
  }
});

// Get All New Inventory By Id
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const inventory = await db.NewInventory.findOne({
      where: {
        id
      }
    });
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add New Inventory By Dealer ID

router.post("/add", async (req, res) => {
  try {
    const newInventory = await db.NewInventory.create({
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
    res.status(201).json(newInventory);
    emitter.emitToDealer(req.session.dealer_user.id, "new_inventory_added", {
      inventory: newInventory,
      message: "You added a new item to inventory"
    });
    // Notification that dealer has added a new item to new inventory
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all/view", async (req, res) => {
  try {
    const inventory = await db.NewInventory.findAll({
      include: {
        model: db.Image,
        where: {
          dealer_id: req.session.dealer_user.id
        }
      }
    });
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update New Inventory For Dealer
router.put("/update/newInv/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rowsUpdated, [updatedInventory]] = await db.NewInventory.update(
      {
        car_picture: req.session.image.car_picture,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        price: req.body.price,
        miles: req.body.miles,
        info: req.body.info,
        dealer_id: req.session.dealer_user.id,
        image_id: req.session.image.id
      },
      { returning: true, where: { id } }
    );
    if (rowsUpdated === 0) {
      res.status(400).json({
        warning: "Inventory with that id was not found and or updated"
      });
    } else {
      res.status(200).json({ rowsUpdated, updatedInventory });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete New Inventory
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  db.NewInventory.findOne({
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
      return db.NewInventory.destroy({
        where: {
          id
        }
      })
        .then(deletedInventory => {
          console.log("DELETED INVENTORY", deletedInventory);
          if (deletedInventory === 1) {
            emitter.emitToDealer(inventory.dealer_id, "new_inventory_deleted", {
              inventory,
              message: "You deleted an item from new inventory"
            });
            res.status(200).json({ deletedInventory: inventory });
            // Notification to dealer that they deleted a new inv item
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
