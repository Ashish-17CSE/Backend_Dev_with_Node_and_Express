
const express = require('express');

const userController = require('../controllers/userController');
const router = express.Router();

// Route for getting all users
router.get('/users', userController.getAllUsers);

// Route for creating a new user
router.post('/users', userController.createUser);

// Route for editing a user
// router.get('/users/:id', userController.getEditUser);
// router.post('/users/:id', userController.postEditUser);

// Route for deleting a user
// router.delete('/users/:id', userController.deleteUser);

// Route for editing a user by ID
router.put('/users/:id', userController.editUser);

// Route for deleting a user by ID
router.post('/users/:id', userController.deleteUser);





module.exports = router;
