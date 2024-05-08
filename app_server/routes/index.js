const express = require('express');
const router = express.Router();
const eventController = require('../controllers/main.js');

router.get("/", eventController.gethome );
router.get('/evento', eventController.viewEvents);
router.get('/evento/:id', eventController.viewEvent);
router.post('/evento/:id/purchase', eventController.purchaseTickets);

module.exports = router;