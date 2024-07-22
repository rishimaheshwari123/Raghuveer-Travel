const express = require("express");
const { contactCtrl } = require("../controllers/contactCtrl");
const router = express.Router();



router.post("/contact", contactCtrl);
module.exports = router;