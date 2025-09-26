/*
endpoint de usuarios
*/

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); 


// Crear usuario
router.post("/post", userController.createUser);

// Obtener todos los usuarios
router.get("/get" , userController.getUsers);

// Obtener usuario por ID
router.get("/get/:id", userController.getUserById);

// Actualizar usuario
router.put("/put/:id", userController.updateUser);

// Eliminar usuario
router.delete("/delete/:id", userController.deleteUser);
module.exports = router;