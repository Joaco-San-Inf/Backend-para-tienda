/**
 * Controlador de Usuarios
 * ------------------------
 * Este archivo implementa las operaciones CRUD para la tabla "users":
 * - createUser: Crea un nuevo usuario con contraseña hasheada.
 * - getUsers: Devuelve todos los usuarios (sin contraseña).
 * - getUserById: Devuelve un usuario según su ID.
 * - updateUser: Permite actualizar los campos de un usuario (incluida la contraseña).
 * - deleteUser: Elimina un usuario de la base.
 * 
 * Dependencias:
 * - Sequelize (para manejar el modelo User).
 * - Bcrypt (para encriptar contraseñas).
 *
 */

const { User } = require("../models");
const bcrypt = require("bcrypt"); // libreria que define funciones para hashear contraseñas
const salto = 10; // numero de rondas de salting para bcrypt



/**
 * Crear un nuevo usuario en la base de datos.
 * @param {Object} req - Objeto de la petición HTTP.
 * @param {Object} res - Objeto de la respuesta HTTP.
 * @returns {JSON} Mensaje de éxito y el usuario creado o error correspondiente.
 */


exports.createUser = async (req, res) => {
  console.log('Request Body:', req.body); // Línea de depuración
  try {
    const { user_name, email, number_phone, password , } = req.body;

    // Validar campos básicos

    if (!user_name || !email || !password) { //solo pido lo que es obligatorio 
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    
    // Hashear contraseña antes de guardar (ayuda a la seguridad )
    const hashedPassword = await bcrypt.hash(password, salto);

    const user = await User.create({
      user_name,
      email,
      number_phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuario creado con éxito", user });
  } catch (error) {
    console.error("Error en createUser:", error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

/**
 * 
 * Obtener todos los usuarios registrados.
 * - Solo retorna: user_id, user_name, email y number_phone.
 * - El campo password se excluye por seguridad.
 */
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["user_id", "user_name", "email", "number_phone"], // ocultamos el password
    });
    res.json(users);
  } catch (error) {
    console.error("Error en getUsers:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: ["user_id", "user_name", "email", "number_phone"],
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error en getUserById:", error);
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_name, email, number_phone, password } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Si envían password, la volvemos a hashear
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    user.user_name = user_name || user.user_name;
    user.email = email || user.email;
    user.number_phone = number_phone || user.number_phone;

    await user.save();

    res.json({ message: "Usuario actualizado con éxito", user });
  } catch (error) {
    console.error("Error en updateUser:", error);
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    await user.destroy();
    res.json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    console.error("Error en deleteUser:", error);
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

/**
 * Loguear un usuario.
 * @param {Object} req - Objeto de la petición HTTP.
 * @param {Object} res - Objeto de la respuesta HTTP.
 * @returns {JSON} Mensaje de éxito y el usuario logueado o error correspondiente.
 */

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const userResponse = {
      user_id: user.user_id,
      user_name: user.user_name,
      email: user.email,
      number_phone: user.number_phone,
    };

    res.status(200).json({ message: "Login exitoso", user: userResponse });
  } catch (error) {
    console.error("Error en loginUser:", error);
    res.status(500).json({ error: "Error al loguear usuario" });
  }
};