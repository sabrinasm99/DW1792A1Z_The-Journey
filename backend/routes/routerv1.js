const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { register, login } = require("../controller/auth");

// Auth
router.post("/register", register);
router.post("/login", login);

module.exports = router;
