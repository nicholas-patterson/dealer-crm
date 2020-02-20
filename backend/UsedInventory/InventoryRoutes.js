const router = require("express").Router();
const db = require("../models");

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
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all/view", async (req, res) => {
  try {
    const inventory = await db.Inventory.findAll({
      include: {
        model: db.Image
      },
      where: {
        id: req.session.dealer_user.id
      }
    });
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
