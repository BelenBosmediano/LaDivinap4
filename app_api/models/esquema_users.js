const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
   nombre: {
       type: String,
       required: true
   },
   apellido: {
       type: String,
       required: true
   },
   mail: {
       type: String,
       required: true
   },
   direccion: {
       type: String
   },
   telefono: {
       type: Number,
       required: true,    
   },
   edad: {
       type: Number,
       min: 1,
       max: 99,
       'default': 18
   },
   creado: {
       type: Date,
       'default': Date.now
   },
   password:{
    type: String,
    required: true,
   }

   //me gustaria a;adir intagram y correoelectronico
});

const Usuario = new mongoose.model('user', usersSchema);

const user = new Usuario({
    nombre: 'Sofia',
    apellido: 'Lopez',
    identificacion: 1722495573,
    direccion: 'Ibarra',
    telefono: 99776543,
    edad: 25,
    creado: '2024/02/14'  //si no funciona algo comentar el creado
})

//user.save();

module.exports = Usuario;