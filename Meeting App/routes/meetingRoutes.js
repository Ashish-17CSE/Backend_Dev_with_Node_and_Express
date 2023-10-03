
const express = require('express');

const userController = require('../controllers/userController');
const router = express.Router();

router.get('/meeting', userController.getAllUsers);

router.post('/meeting', userController.createUser);

router.put('/meeting/:id', userController.editUser);

router.post('/meeting/:id', userController.deleteUser);





module.exports = router;
