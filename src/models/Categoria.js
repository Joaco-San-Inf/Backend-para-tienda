const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Categoria = sequelize.define("Categoria", {
  id_categoria: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  categoria_name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  description: { type: DataTypes.STRING(255) },
  id_tienda_fk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Tienda
});

module.exports = Categoria;