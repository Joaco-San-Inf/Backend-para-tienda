/*
Probando la API
*/

const express = require("express");
const usuario = require("./user_endpoint");
const router = express.Router();

router.get("/api", (req, res) => {
    res.send("La API anda wacho .....")
})

router.use("/api/user", usuario);


module.exports = router;