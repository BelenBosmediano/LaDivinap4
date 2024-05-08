const express = require('express');
const router = express.Router();
const perfil = require('../controllers/perfil.js');

router.get('/', perfil.viewProfile);
router.post('/edit', perfil.editProfile);

module.exports = router;