// Uso mongoose y el modelo compilado 
const mongoose = require('mongoose'); // incorporar mongoose al proyecto
const Evento = require("../models/esquema_eventos")

// controladores
// crear un nuevo evento
const eventCreate = async(req, res) => {
    try {
        const {nombre, imagen, genero, ubicacion, fecha, detalle, precio} = req.body
        const eventsExist = await Evento.findOne({nombre: nombre})
        if (eventsExist) {
            console.log("El Nombre ya existe")
            res.status(400).json({message: "El Nombre ya existe"})
        }
        const event = new Evento ({
            nombre, imagen, genero, ubicacion, fecha, detalle, precio
        })
        await event.save() 
        console.log(event)
        console.log("Evento Creado")
        res.status(201).json(event)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// obtener todos los eventos
const eventList = async (req, res) => {
    try {
        const events = await Evento.find(); 
        if (!events) {
            res.status(404).json({message: "No hay Eventos"})
        }
        res.status(200).json(events)


    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// obtener un evento por su eventoid
const eventRead = async(req, res) => {
    try {
        const events = await Evento.findById(req.params.eventid);
        if (!events) {res.status(404).json({message: "Not Found"})}
        res.status(200).json(events)
    } catch (error) {
        res.status(500).json({message: error.message})
}
}

// actualizar un usuario
const eventUpdate = async(req, res) => {
    try {
        const {nombre, imagen, genero, ubicacion, fecha, detalle, precio} = req.body
        const Data = {nombre, imagen, genero, ubicacion, fecha, detalle, precio}
        await Evento.findByIdAndUpdate(req.params.eventid, Data);
        res.status(200).json({message: "Valido"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// borrar un usuario
const eventDelete = async (req, res) => {
    try {
        await Evento.findByIdAndDelete(req.params.eventid);
        res.status(200).json({message: "Valido"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
module.exports = {
    eventCreate,      // crear un nuevo evento
    eventList,        // obtener todos los eventos
    eventRead,        // obtener un evento por su eventid
    eventUpdate,      // actualizar un evento
    eventDelete       // borrar un evento 
}




