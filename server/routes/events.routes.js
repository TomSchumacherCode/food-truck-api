const express = require("express");
const router = express.Router();
const { eventsByUserId, allEvents, createEvent } = require("../models/events.models");
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

router.post("/", (req, res) => {
  createEvent(res, req.body.lat, req.body.lng, req.body.userId);
});


module.exports = router;
