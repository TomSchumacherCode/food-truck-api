const express = require("express");
const router = express.Router();
const { login, register, usersByIds } = require("../models/users.models");
const validate = require("../middleware/validate.middleware");

//! /api/users/login - POST
router.post("/login", validate, (req, res) => {
  const { username, password } = req.body;
  login(res, username, password);
});

//! /api/users/register - PUT
router.put("/register", validate, (req, res) => {
  register(res, req.body.username, req.body.password, req.body.truckName);
});

//! /api/users
router.get("/", (req, res) => {
  console.log("req.query", req.query)
  const {userIds} = req.query
  const parsed = typeof userIds === "string" ? [userIds] : userIds
  console.log("parsed", parsed)
  usersByIds(res, parsed)
});


module.exports = router;
