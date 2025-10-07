/*
Probando la API
*/

const express = require("express");
const usuario = require("./user_endpoints");
const productos = require("./product_endpoints");
const categorias = require("./categoria_endpoints");
const tiendas = require("./tienda_endpoints");
const router = express.Router();

router.get("/api", (req, res) => {
    res.send("La API anda wacho .....")
})

router.use("/api/user", usuario);
router.use("/api/producto", productos);
router.use("/api/categorias", categorias);
router.use("/api/tiendas", tiendas);

module.exports = router;