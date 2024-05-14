const express = require('express');
const router = express.Router();
const metodopag = require('../controllers/metodopag.js');
const authentication = require('../middlewares/authentication.js');

router.get('/qrentradas/event/:eventid/user/:userid', authentication, metodopag.qrentradas);
router.get('/:id',authentication, metodopag.getEvent);
router.post('/buy-tickets',authentication, metodopag.postBuyTickets);

module.exports = router;