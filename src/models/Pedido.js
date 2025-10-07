module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define("Pedido", {
    pedido_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false }, // FK a User
    id_tienda_fk: { type: DataTypes.INTEGER, allowNull: false }, // FK a Tienda
    fecha: { type: DataTypes.DATE, allowNull: false },
    total: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  });
  return Pedido;
};