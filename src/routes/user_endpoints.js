/*
endpoint de usuarios
*/

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); 


// Crear usuario
router.post("/", userController.createUser);

// Obtener todos los usuarios
router.get("/" , userController.getUsers);

// Obtener usuario por ID
router.get("/:id", userController.getUserById);

// Actualizar usuario
router.put("/:id", userController.updateUser);

// Eliminar usuario
router.delete("/:id", userController.deleteUser);
module.exports = router;