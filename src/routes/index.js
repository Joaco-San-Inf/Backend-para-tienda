/*
Probando la API
*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("La API anda wacho .....")
})

module.exports = router;