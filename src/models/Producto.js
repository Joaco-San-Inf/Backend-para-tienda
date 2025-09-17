const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Producto = sequelize.define("Producto", {
  product_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  product_name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  product_image: { type: DataTypes.STRING(100), allowNull: false },
  stock: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  product_price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  id_categoria: { type: DataTypes.INTEGER, allowNull: false }, // FK a Categoria
  id_tienda_fk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Tienda
});

module.exports = Producto;