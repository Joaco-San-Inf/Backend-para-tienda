/**
 * Controlador de Productos
 * ------------------------
 * Implementa CRUD para la tabla "productos".
 */

const { Producto } = require("../models");
const validarCamposProducto = require("../helpers/validarcamposProducto");
/**
 * Crear un nuevo producto en la base de datos.
 */
exports.createProducto = async (req, res) => {
  try {
    const {
      product_name,
      product_image,
      stock,
      product_price,
      id_categoria,
      id_tienda_fk,
    } = req.body;

    // Validación básica
    const errorMensaje = validarCamposProducto(req.body); 
        if (errorMensaje) return res.status(400).json({ error: errorMensaje});
  
    // Crear el producto
    const nuevoProducto = await Producto.create({
      product_name,
      product_image,
      stock,
      product_price,
      id_categoria,
      id_tienda_fk,
    });

    res.status(201).json({
      message: "Producto creado con éxito",
      producto: nuevoProducto,
    });
  } catch (error) {
    console.error("Error en createProducto:", error);
    res.status(500).json({ error: "Error al crear producto" });
  }
};

/**
 * Obtener todos los productos registrados.
 */
exports.getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    console.error("Error en getProductos:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

/**
 * Obtener un producto por ID.
 */
exports.getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    if (isNaN(id)) return res.status(400).json({ error: "ID inválido" });

    res.json(producto);
  } catch (error) {
    console.error("Error en getProductoById:", error);
    res.status(500).json({ error: "Error al obtener producto" });
  }
};

/**
 * Actualizar un producto.
 */
exports.updateProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const [updated] = await Producto.update(req.body, {
      where: { product_id: id },
    });

    if (!updated) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const productoActualizado = await Producto.findByPk(id);
    res.json({
      message: "Producto actualizado con éxito",
      producto: productoActualizado,
    });
  } catch (error) {
    console.error("Error en updateProducto:", error);
    res.status(500).json({ error: "Error al actualizar producto" });
  }
};

/**
 * Eliminar un producto.
 */
exports.deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Producto.destroy({
      where: { product_id: id },
    });

    if (!deleted) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    console.error("Error en deleteProducto:", error);
    res.status(500).json({ error: "Error al eliminar producto" });
  }
};

// filtar por tienda y categoria 
exports.getProductsByCategory = async (req, res) => {
   try{ 
    const { id_categoria } = req.params;
    const products = await Producto.findAll({ where: { id_categoria } });
    res.json(products);
   } catch (error) {
    console.error("Error en getProductsByCategory:", error);
    res.status(500).json({ error: "Error al obtener productos por categoría" });
   }
};

// filtar por tienda
exports.getProductsByStore = async (req, res) => {
  try{
    const { id_tienda_fk } = req.params;
    const products = await Producto.findAll({ where: { id_tienda_fk } });
    res.json(products);
    } catch (error) {
        console.error("Error en getProductsByStore:", error);
        res.status(500).json({ error: "Error al obtener productos por tienda" });
    }
};