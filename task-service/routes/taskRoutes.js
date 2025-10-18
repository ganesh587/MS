const express = require('express');
const router = express.Router();
const { TaskController  } = require('../controllers/taskControllers');


router.post('/', TaskController.createTask);
router.get('/', TaskController.getTasks);
router.get('/:id', TaskController.getTaskById);


module.exports = router;
