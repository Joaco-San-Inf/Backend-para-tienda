const { Categoria } = require("../models");

/**
 * Crear una nueva categoría.
 */
exports.createCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json({ message: "Categoría creada con éxito", categoria });
  } catch (error) {
    console.error("Error en createCategoria:", error);
    res.status(500).json({ error: "Error al crear la categoría" });
  }
};

/**
 * Obtener todas las categorías.
 */
exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    console.error("Error en getCategorias:", error);
    res.status(500).json({ error: "Error al obtener las categorías" });
  }
};

/**
 * Obtener una categoría por ID.
 */
exports.getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error("Error en getCategoriaById:", error);
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
};

/**
 * Actualizar una categoría.
 */
exports.updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Categoria.update(req.body, {
      where: { id_categoria: id },
    });
    if (updated) {
      const updatedCategoria = await Categoria.findByPk(id);
      res.json({ message: "Categoría actualizada con éxito", categoria: updatedCategoria });
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error("Error en updateCategoria:", error);
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};

/**
 * Eliminar una categoría.
 */
exports.deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Categoria.destroy({
      where: { id_categoria: id },
    });
    if (deleted) {
      res.json({ message: "Categoría eliminada con éxito" });
    } else {
      res.status(404).json({ error: "Categoría no encontrada" });
    }
  } catch (error) {
    console.error("Error en deleteCategoria:", error);
    res.status(500).json({ error: "Error al eliminar la categoría" });
  }
};
