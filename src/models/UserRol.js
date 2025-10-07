module.exports = (sequelize, DataTypes) => {
  const UserRol = sequelize.define("UserRol", {
    user_rol_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },  // FK a User
    rol_idfk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Rol
    id_tienda_fk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Tienda
  });
  return UserRol;
};