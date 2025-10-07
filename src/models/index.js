/*
Voy a hacer un ORM para manejar un toque todos los modelos por que si no es un quilombo 
Totalmente hecho con ia por que aguante el vibecoding 
*/
const sequelize = require("../config/database"); 
const {DataTypes} = require("sequelize"); 

const Banner = require("./Banner")(sequelize, DataTypes);
const User = require("./User")(sequelize, DataTypes);
const Rol = require("./Rol")(sequelize, DataTypes);
const Tienda = require("./Tienda")(sequelize, DataTypes);
const Categoria = require("./Categoria")(sequelize, DataTypes);
const Producto = require("./Producto")(sequelize, DataTypes);
const Pedido = require("./Pedido")(sequelize, DataTypes);
const PedidoDetalle = require("./PedidoDetalle")(sequelize, DataTypes);
const UserRol = require("./UserRol")(sequelize, DataTypes);


/**
  Relaciones
 */

//  Usuario ↔ Tienda
User.hasMany(Tienda, { foreignKey: "id_propietario" });
Tienda.belongsTo(User, { foreignKey: "id_propietario" });

//   Usuario ↔ Rol ↔ Tienda (tabla intermedia)
User.belongsToMany(Rol, { through: UserRol, foreignKey: "user_id" });
Rol.belongsToMany(User, { through: UserRol, foreignKey: "rol_idfk" });
Tienda.belongsToMany(User, { through: UserRol, foreignKey: "id_tienda_fk" });

//  Tienda ↔ Categoría
Tienda.hasMany(Categoria, { foreignKey: "id_tienda_fk" });
Categoria.belongsTo(Tienda, { foreignKey: "id_tienda_fk" });

//  Categoría ↔ Producto
Categoria.hasMany(Producto, { foreignKey: "id_categoria" });
Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });

//  Tienda ↔ Producto
Tienda.hasMany(Producto, { foreignKey: "id_tienda_fk" });
Producto.belongsTo(Tienda, { foreignKey: "id_tienda_fk" });

//  Usuario ↔ Pedido
User.hasMany(Pedido, { foreignKey: "user_id" });
Pedido.belongsTo(User, { foreignKey: "user_id" });

//  Tienda ↔ Pedido
Tienda.hasMany(Pedido, { foreignKey: "id_tienda_fk" });
Pedido.belongsTo(Tienda, { foreignKey: "id_tienda_fk" });

//  Pedido ↔ PedidoDetalle
Pedido.hasMany(PedidoDetalle, { foreignKey: "pedido_id" });
PedidoDetalle.belongsTo(Pedido, { foreignKey: "pedido_id" });

//  Producto ↔ PedidoDetalle
Producto.hasMany(PedidoDetalle, { foreignKey: "product_id" });
PedidoDetalle.belongsTo(Producto, { foreignKey: "product_id" });

module.exports = {
  User,
  Rol,
  Tienda,
  Categoria,
  Producto,
  Pedido,
  PedidoDetalle,
  UserRol, 
  sequelize,
  Sequelize: require('sequelize'),
};
