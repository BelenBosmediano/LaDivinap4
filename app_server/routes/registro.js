const express = require('express');
const router = express.Router();

//controlador
const crtlRegistro = require('../controllers/registro');


//Get about page

router.get('/',crtlRegistro.renderRegistro);
router.post ('/add',crtlRegistro.registro);
router.get('/login',crtlRegistro.renderlogin);
router.post('/login/sign',crtlRegistro.login);
router.get('/logout',crtlRegistro.logout);

module.exports = router;