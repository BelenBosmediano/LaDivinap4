const express = require('express');
const router = express.Router();
const eventController = require('../controllers/main.js');



router.get("/", eventController.gethome );


module.exports = router;