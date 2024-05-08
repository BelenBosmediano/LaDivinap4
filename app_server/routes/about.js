const express = require('express');
const router = express.Router();

//controlador
const crtlAbout = require('../controllers/about');

//Get about page

router.get('/',crtlAbout.about);


module.exports = router;
