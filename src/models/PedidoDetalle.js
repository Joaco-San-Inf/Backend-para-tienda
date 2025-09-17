const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PedidoDetalle = sequelize.define("PedidoDetalle", {
  detalle_pedido_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  pedido_id: { type: DataTypes.INTEGER, allowNull: false }, // FK a Pedido
  product_id: { type: DataTypes.INTEGER, allowNull: false }, // FK a Producto
  cantidad: { type: DataTypes.INTEGER, allowNull: false },
  precio_unitario: { type: DataTypes.DECIMAL(10,2), allowNull: false },
});

module.exports = PedidoDetalle;