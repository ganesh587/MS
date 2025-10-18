const express = require('express');
const router = express.Router();
const { UserController  } = require('../controllers/userControllers');


router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);


module.exports = router;
