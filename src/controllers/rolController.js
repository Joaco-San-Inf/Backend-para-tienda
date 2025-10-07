/*
  
*/

const Rol = require("../models/Rol");


//Obtener todos los roles 
exports.getRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll({
      attributes: ["rol_id", "rol_name"],
    });
    res.json(roles);
  } catch (error) {
    console.error("Error en getRoles:", error);
    res.status(500).json({ error: "Error al obtener roles" });
  }
};