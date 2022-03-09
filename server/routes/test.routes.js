const express = require("express");
const router = express.Router();

router.get("/json", (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*")

    return res.send({
        data: { test: "SUCCESS" },
        success: true,
        error: null,
    });
});

router.get("/html", (req, res) => {
    res.header("Content-Type", "text/html")
    // res.header("Access-Control-Allow-Origin", "*")

    res.send(`
    <h1>Mock API</h1>
    `)
});


module.exports = router;
