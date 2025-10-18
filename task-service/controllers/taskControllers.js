const taskSchema = require('../models/taskSchema');


class TaskController {
   createTask = async (req, res) => {
    try {
      const task = new taskSchema(req.body);
      await task.save();
      res.status(201).send(task);
    } catch (error) {
      res.status(400).send(error);
    }
    };

    getTasks = async (req, res) => {
      try {
        const tasks = await taskSchema.find();
        res.status(200).send(tasks);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    getTaskById = async (req, res) => {
      try {
        const task = await taskSchema.findById(req.params.id);
        if (!task) {
          return res.status(404).send({ message: 'Task not found' });
        }
        res.status(200).send(task);
      } catch (error) {
        res.status(500).send(error);
      }
    };
}

exports.TaskController = new TaskController();
