const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { register, login } = require("../controller/auth");
const { postJourney } = require("../controller/journey");
const { authenticated } = require("../middleware/auth");

// Auth
router.post("/register", register);
router.post("/login", login);
router.post("/journey", authenticated, fileUpload(), postJourney);

module.exports = router;
