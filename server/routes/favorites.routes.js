const express = require("express");
const router = express.Router();
const {
  addFavorite,
  removeFavorite,
  getByUserID,
} = require("../models/favorites.models");

router.get("/:user_id", (req, res) => {
  getByUserID(res, req.params.user_id);
});

router.delete("/remove/:id", (req, res) => {
  removeFavorite(res, req.params.id);
});

router.put("/add", (req, res) => {
  const { user_id, gif_id, title, url } = req.body;
  if (!user_id || !gif_id || !title || !url) {
    return res.send({
      data: null,
      success: false,
      error: "Invalid data provided",
    });
  }

  const gif = { user_id, gif_id, title, url };
  addFavorite(res, gif);
});

module.exports = router;
