const express = require('express');
const router = express.Router();
const perfilusu = require('../controllers/perfilusu.js');

router.get('/', perfilusu.viewProfile);
router.post('/edit', perfilusu.editProfile);

module.exports = router;