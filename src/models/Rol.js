module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define("Rol", {
    rol_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    rol_name: { type: DataTypes.STRING(100), allowNull: false },
    description: { type: DataTypes.STRING(255) },
  });
  return Rol;
};