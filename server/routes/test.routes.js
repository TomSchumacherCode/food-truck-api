const express = require("express");
const router = express.Router();

router.get("/json", (req, res) => {
    return res.send({
        data: { test: "SUCCESS" },
        success: true,
        error: null,
      });
});

router.get("/html", (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.send(`
    <h1>Mock API</h1>
    `)
});


module.exports = router;
