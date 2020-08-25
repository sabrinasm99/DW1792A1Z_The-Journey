const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const { register, login } = require("../controller/auth");
const {
  postJourney,
  readJourneys,
  readDetailJourney,
  readJourneysByUserId,
} = require("../controller/journey");
const {
  addBookmark,
  readBookmarksByProfileId,
} = require("../controller/bookmark");
const { readDetailUser } = require("../controller/user");
const { authenticated } = require("../middleware/auth");

// Auth
router.post("/register", register);
router.post("/login", login);

// User
router.get("/user/:id", authenticated, readDetailUser)

// Journey
router.post("/journey", authenticated, fileUpload(), postJourney);
router.get("/journeys", readJourneys);
router.get("/journey/:id", authenticated, readDetailJourney);
router.get("/journeys-user/:id", authenticated, readJourneysByUserId);

// Bookmark
router.post("/bookmark", authenticated, addBookmark);
router.get("/bookmarks/:id", authenticated, readBookmarksByProfileId);

module.exports = router;
