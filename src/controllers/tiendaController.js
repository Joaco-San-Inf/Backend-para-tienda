const Tienda = require("../models/Tienda");

/**
 * Crear una nueva tienda.
 */
exports.createTienda = async (req, res) => {
  try {
    const tienda = await Tienda.create(req.body);
    res.status(201).json({ message: "Tienda creada con éxito", tienda });
  } catch (error) {
    console.error("Error en createTienda:", error);
    res.status(500).json({ error: "Error al crear la tienda" });
  }
};

/**
 * Obtener todas las tiendas.
 */
exports.getTiendas = async (req, res) => {
  try {
    const tiendas = await Tienda.findAll();
    res.json(tiendas);
  } catch (error) {
    console.error("Error en getTiendas:", error);
    res.status(500).json({ error: "Error al obtener las tiendas" });
  }
};

/**
 * Obtener una tienda por ID.
 */
exports.getTiendaById = async (req, res) => {
  try {
    const { id } = req.params;
    const tienda = await Tienda.findByPk(id);
    if (tienda) {
      res.json(tienda);
    } else {
      res.status(404).json({ error: "Tienda no encontrada" });
    }
  } catch (error) {
    console.error("Error en getTiendaById:", error);
    res.status(500).json({ error: "Error al obtener la tienda" });
  }
};

/**
 * Actualizar una tienda.
 */
exports.updateTienda = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Tienda.update(req.body, {
      where: { id_tienda: id },
    });
    if (updated) {
      const updatedTienda = await Tienda.findByPk(id);
      res.json({ message: "Tienda actualizada con éxito", tienda: updatedTienda });
    } else {
      res.status(404).json({ error: "Tienda no encontrada" });
    }
  } catch (error) {
    console.error("Error en updateTienda:", error);
    res.status(500).json({ error: "Error al actualizar la tienda" });
  }
};

/**
 * Eliminar una tienda.
 */
exports.deleteTienda = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Tienda.destroy({
      where: { id_tienda: id },
    });
    if (deleted) {
      res.json({ message: "Tienda eliminada con éxito" });
    } else {
      res.status(404).json({ error: "Tienda no encontrada" });
    }
  } catch (error) {
    console.error("Error en deleteTienda:", error);
    res.status(500).json({ error: "Error al eliminar la tienda" });
  }
};
