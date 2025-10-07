module.exports = (sequelize, DataTypes) => {
  const Tienda = sequelize.define("Tienda", {
    id_tienda: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    tienda_name: { type: DataTypes.STRING(100), allowNull: false, unique: true },
    description: { type: DataTypes.STRING(255), allowNull: false },
    id_propietario: { type: DataTypes.INTEGER, allowNull: false }, // FK a User
  });
  return Tienda;
};