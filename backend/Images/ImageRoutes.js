const router = require("express").Router();
const db = require("../models");
const multer = require("multer");
const cloudinary = require("cloudinary");

// Image Upload Configuration
const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

// accept image files only
const imageFilter = function (req, file, cb) {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
    return cb(new Error("Only Image Files Are Accepted! "), false);
  }
  cb(null, true);
};

// Upload
const upload = multer({ storage: storage, fileFilter: imageFilter });
cloudinary.config({
  cloud_name: "dwsqbti0a", //ENTER YOUR CLOUDINARY NAME
  api_key: process.env.CLOUDINARY_API_KEY, // THIS IS COMING FROM CLOUDINARY WHICH WE SAVED FROM EARLIER
  api_secret: process.env.CLOUDINARY_API_SECRET, // ALSO COMING FROM CLOUDINARY WHICH WE SAVED EARLIER
});

router.post("/add", upload.single("car_picture"), (req, res) => {
  cloudinary.v2.uploader.upload(req.file.path, (err, result) => {
    db.Image.create({
      car_picture: result.secure_url,
      cloudinary_pic_id: result.public_id,
      dealer_id: req.session.dealer_user.id,
    })
      .then((picture) => {
        req.session.image = picture;
        res.status(200).json(picture);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  cloudinary.v2.uploader.destroy(
    req.session.image.cloudinary_pic_id,
    (err, result) => {
      db.Image.destroy({
        where: {
          id,
        },
      })
        .then((deleted) => {
          res.status(200).json(deleted);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  );
});

module.exports = router;
