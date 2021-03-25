//Routes doe User
var express = require('express');
var router = express.Router();
const userController = require('../controllers/UserController');

// /users - GET 
router.get('/', userController.findAll);

// /users:id - GET
router.get('/:id', userController.findById);

// /users - POST
router.post('/', userController.create);

// /users - DELETE
router.delete('/:id',userController.delete)

module.exports = router;
