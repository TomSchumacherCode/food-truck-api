const express = require("express");
const router = express.Router();
const { login, signup } = require("../models/auth.models");
const validate = require("../middleware/validate.middleware");

//! /api/auth/login - POST
router.post("/login", validate, (req, res) => {
  const { username, password } = req.body;
  login(res, username, password);
});

//! /api/auth/signup - PUT
router.put("/signup", validate, (req, res) => {
  signup(res, req.body.username, req.body.password);
});

module.exports = router;
