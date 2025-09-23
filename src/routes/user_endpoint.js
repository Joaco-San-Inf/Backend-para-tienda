/*
voy a probar el endpoint de usuarios a ver que tul
*/

const express = require("express");
const router = express.Router();
//const User = require("../models/User"); 

router.get("/", async (req, res) =>{
    res.send("Endpoint de usuarios funciona")
})

module.exports = router;