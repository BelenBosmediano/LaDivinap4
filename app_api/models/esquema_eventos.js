const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
   nombre: {
       type: String,
       required: true
   },
   imagen: {
    type: String,
    // validate: {
    //     validator: function(value) {
    //         // Se aceptara formato png unicamente
    //         return value.toLowerCase().endsWith('.png');
    //     },
    //     message: 'La imagen debe ser de formato PNG',      //preguntarle si esta bien esto 
    // },
   },
   genero: { //arte,danza,poemario,
       type: String,
       required: true  
   },
   ubicacion: {
       type: String,
       required: true
   },
   fecha: {
    type: Date,
    required: true
   },
   detalle: { //Detalle del eveno breve descripcion 
    type: String,
    required: true
   },
   precio: {
       type: Number,
       required: true,    
   },
   
   
   //crear un evento 
});

const Evento = new mongoose.model('event', eventSchema); //cambiar esto a evento 

const event = new Evento({
    nombre: 'La Romana',
    imagen: 'portada.png',
    genero: 'Arte-esculturas',
    ubicacion: 'Centro Cultural',
    fecha: '2024/02/14',
    detalle: 'Este evento explora las esculturas hechas por ...',
    precio: '$10',
})


module.exports = Evento;
