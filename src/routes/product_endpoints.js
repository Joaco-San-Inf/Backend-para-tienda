/*
    Todas las rutas relacionadas con productos
*/
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


// POST /api/productos - Crear un nuevo producto
router.post('/', productController.createProducto);

// GET /api/productos - Obtener todos los productos
router.get('/', productController.getProductos);

// GET /api/productos/:id - Obtener un producto por ID
router.get('/:id', productController.getProductoById);

// PUT /api/productos/:id - Actualizar un producto por ID
router.put('/:id', productController.updateProducto);

// DELETE /api/productos/:id - Eliminar un producto por ID
router.delete('/:id', productController.deleteProducto);

// GET /api/productos/categoria/:id_categoria - Filtrar productos por categoría
router.get('/categoria/:id_categoria', productController.getProductsByCategory);

// GET /api/productos/tienda/:id_tienda_fk - Filtrar productos por tienda
router.get('/tienda/:id_tienda_fk', productController.getProductsByStore);

module.exports = router;
