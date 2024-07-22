const express = require("express");
const { bookingCtrl } = require("../controllers/bookingCtrl");
const router = express.Router();



router.post("/booking", bookingCtrl);
module.exports = router;