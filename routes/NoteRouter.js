//Routes doe Note
var express = require('express');
var router = express.Router();
const noteController = require('../controllers/NoteController');

// /notes - GET 
router.get('/',noteController.findAll );

// /notes:id - GET
router.get('/:id', noteController.findById);

// /notes - POST
router.post('/', noteController.create);

// /notes - PUT
router.put('/:id', noteController.edit);

// /notes - DELETE
router.delete('/:id',noteController.delete)


module.exports = router;
