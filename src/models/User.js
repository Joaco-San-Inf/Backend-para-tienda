const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  user_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  user_name: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  number_phone: { type: DataTypes.STRING(20), unique: true },
  password: { type: DataTypes.STRING(255), allowNull: false },
});

module.exports = User; 

