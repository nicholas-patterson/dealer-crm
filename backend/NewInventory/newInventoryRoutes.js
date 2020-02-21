const router = require("express").Router();
const db = require("../models");

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
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/all/view", async (req, res) => {
  try {
    const inventory = await db.NewInventory.findAll({
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
