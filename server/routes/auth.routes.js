const express = require("express");
const router = express.Router();
const { login, register } = require("../models/auth.models");
const validate = require("../middleware/validate.middleware");

//! /api/auth/login - POST
router.post("/login", validate, (req, res) => {
  const { username, password } = req.body;
  login(res, username, password);
});

//! /api/auth/register - PUT
router.put("/register", validate, (req, res) => {
  register(res, req.body.username, req.body.password, req.body.truckName);
});

module.exports = router;
