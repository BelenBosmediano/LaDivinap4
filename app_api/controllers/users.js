// Uso mongoose y el modelo compilado
const mongoose = require("mongoose"); // incorporar mongoose al proyecto
const Usuario = require("../models/esquema_users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

// controladores

// login

const login = async (req, res) => {
  const user = await Usuario.findOne({ mail: req.body.mail });
  if (!user) {
    res.status(404).json({ message: "user not found" });
  }

  try {
    if (await bcryptjs.compare(req.body.password, user.password)) {
      const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
      res.header("auth-token", token).status(200).json({
        message: "Login success",
        token: token,
      });
    } else {
      res.status(204).json({
        message: "Password not match",
      })
    }
  } catch (error) {
    res.status(500).json({
        message: error.message
    });
  }
};
// crear un nuevo usuario
const userCreate = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      mail,
      direccion,
      telefono,
      edad,
      creado,
      password,
    } = req.body;
    const usersExist = await Usuario.findOne({ mail: mail });
    if (usersExist) {
      res.status(400).json({ message: "El Usuario ya Existe" });
    }
    const salt = await bcryptjs.genSalt(10); //para encriptar la contrasena
    const hash = await bcryptjs.hash(password, salt);
    const user = new Usuario({
      nombre,
      apellido,
      mail,
      direccion,
      telefono,
      edad,
      creado,
      password: hash,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// obtener todos los usuarios
const userList = async (req, res) => {
  try {
    const users = await Usuario.find();
    if (users.length == 0) {
      res.status(400).json({ message: "No hay Usuarios" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// obtener un usuario por su userid
const userRead = async (req, res) => {
  try {
    const users = await Usuario.findById(req.params.userid);
    if (!users) {
      res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const userFindName = async (req, res) => {
  try {
    const buscar = new RegExp(req.params.name);
    const user = await Usuario.find({ identifacion: req.params.name }); //busqueda exacta ""
    if (Usuario) {
      res.status(200).json(Usuario);
    }
  } catch (error) {
    res.status(404).json({ message: "No se encuentra usuario" });
  }
};

// actualizar un usuario
const userUpdate = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      mail,
      direccion,
      telefono,
      edad,
      creado,
      password,
    } = req.body;
    const salt = await bcryptjs.genSalt(10); //para encriptar la contrasena
    const hash = await bcryptjs.hash(password, salt);
    const Data = {
      nombre,
      apellido,
      mail,
      direccion,
      telefono,
      edad,
      creado,
      password: hash,
    };
    await Usuario.findByIdAndUpdate(req.params.userid, Data);
    res.status(200).json({ message: "Valido" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// borrar un usuario
const userDelete = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.userid);
    res.status(204).json({ message: "Valido" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
module.exports = {
  userCreate, // crear un nuevo usuario
  userList, // obtener todos los usuarios
  userRead, // obtener un usuario por su userid
  userUpdate, // actualizar un usuario
  userDelete, // borrar un usuario
  userFindName,
  login,
};
