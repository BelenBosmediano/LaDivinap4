const express = require('express');
const router = express.Router();
const ctrlUser = require('../controllers/users');
const ctrlEvent = require('../controllers/events');

// definir las rutas para las acciones sobre la colección users
router
    .route('/users')
    .post(ctrlUser.userCreate)     // crear un nuevo usuario
    .get(ctrlUser.userList);       // obtener todos los usuarios


router
    .route('/users/:userid')
    .get(ctrlUser.userRead)       // obtener un usuario por su userid
    .put(ctrlUser.userUpdate)     // actualizar un usuario
    .delete(ctrlUser.userDelete); // borrar un usuario

router
    .route('/events')
    .post(ctrlEvent.eventCreate)     // crear un nuevo evento
    .get(ctrlEvent.eventList);       // obtener todos los evento

router
    .route('/events/:eventid')
    .get(ctrlEvent.eventRead)       // obtener un event por su eventid
    .put(ctrlEvent.eventUpdate)     // actualizar un evento
    .delete(ctrlEvent.eventDelete); // borrar un evento




router 

    .route("/search/:name")
    .get(ctrlUser.userFindName); //buscar un usuario por su nombre :D o identificacion 

router
    .route("/login")    
    .post (ctrlUser.login);

module.exports = router;