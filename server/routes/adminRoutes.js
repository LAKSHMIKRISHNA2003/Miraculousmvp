const express = require("express");
const { login } = require("../controllers/adminController");

const router = express.Router();

// Admin Login Route
router.post("/login", login);

module.exports = router;
