const express = require('express');
const router = express.Router();
const evento = require('../controllers/evento.js');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })
const authentication = require('../middlewares/authentication.js');

router.get('/', evento.eventos);
router.get('/evento/:eventid', evento.getSingleEvent);
router.get('/evento/edit/:eventid',authentication, evento.renderForm);
router.get('/create/event-form', authentication, evento.renderFormCreate);
router.post('/create', authentication ,upload.single('imagen'), evento.createEvent);
router.post('/evento/edit/:eventid',authentication ,evento.editEvent);
router.post('/delete/:eventid', authentication ,evento.deleteEvent);

module.exports = router;