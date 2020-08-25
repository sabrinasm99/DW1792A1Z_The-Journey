const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { register } = require("../controller/auth");

// Auth
router.post("/register", register);

module.exports = router;
