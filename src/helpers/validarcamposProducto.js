function validarCamposProducto({ product_name, product_image, stock, product_price, id_categoria, id_tienda_fk }) {
  if (!product_name) return "El nombre del producto es obligatorio.";
  if (!product_image) return "La imagen del producto es obligatoria.";
  if (stock == null) return "El stock es obligatorio.";
  if (!product_price) return "El precio es obligatorio.";
  if (!id_categoria) return "La categoría es obligatoria.";
  if (!id_tienda_fk) return "La tienda es obligatoria.";
  return null; // todo OK
}

module.exports = validarCamposProducto;

module.exports = validarCamposProducto;