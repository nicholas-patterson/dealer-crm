const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

// Get All Dealers
router.get("/", (req, res) => {
  db.Dealer.findAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Get Single Dealer
router.get("/:id", (req, res) => {
  db.Dealer.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dealer => {
      res.status(200).json(dealer);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
