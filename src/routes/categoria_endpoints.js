const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rutas para Categorías (usando convenciones REST)

// POST /api/categorias - Crear una nueva categoría
router.post('/', categoriaController.createCategoria);

// GET /api/categorias - Obtener todas las categorías
router.get('/', categoriaController.getCategorias);

// GET /api/categorias/:id - Obtener una categoría por ID
router.get('/:id', categoriaController.getCategoriaById);

// PUT /api/categorias/:id - Actualizar una categoría por ID
router.put('/:id', categoriaController.updateCategoria);

// DELETE /api/categorias/:id - Eliminar una categoría por ID
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;
