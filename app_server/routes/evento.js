const express = require('express');
const router = express.Router();
const evento = require('../controllers/evento.js');
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })

router.get('/', evento.eventos);
router.get('/evento/:eventid', evento.getSingleEvent);
router.get('/evento/edit/:eventid', evento.renderForm);
router.get('/create/event-form', evento.renderFormCreate);
router.post('/create', upload.single('imagen'), evento.createEvent);
router.post('/evento/edit/:eventid', evento.editEvent);
router.post('/delete/:eventid', evento.deleteEvent);

module.exports = router;