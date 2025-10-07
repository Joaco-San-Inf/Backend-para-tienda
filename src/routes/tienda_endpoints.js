const express = require('express');
const router = express.Router();
const tiendaController = require('../controllers/tiendaController');

// Rutas para Tiendas (usando convenciones REST)

// POST /api/tiendas - Crear una nueva tienda
router.post('/', tiendaController.createTienda);

// GET /api/tiendas - Obtener todas las tiendas
router.get('/', tiendaController.getTiendas);

// GET /api/tiendas/:id - Obtener una tienda por ID
router.get('/:id', tiendaController.getTiendaById);

// PUT /api/tiendas/:id - Actualizar una tienda por ID
router.put('/:id', tiendaController.updateTienda);

// DELETE /api/tiendas/:id - Eliminar una tienda por ID
router.delete('/:id', tiendaController.deleteTienda);

module.exports = router;
