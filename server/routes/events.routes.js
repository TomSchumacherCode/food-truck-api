const express = require("express");
const router = express.Router();
const { eventsByUserId, allEvents } = require("../models/events.models");
const validate = require("../middleware/validate.middleware");

//! /api/events/:userId - GET
router.get("/:userId", (req, res) => {
    const userId = req.params.userId;
    eventsByUserId(res, userId)
});

//! /api/events/ - GET
router.get("/", (req, res) => {
    allEvents(res)
});

module.exports = router;
