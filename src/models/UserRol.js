const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserRol = sequelize.define("UserRol", {
  user_rol_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },  // FK a User
  rol_idfk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Rol
  id_tienda_fk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Tienda
});

module.exports = UserRol;