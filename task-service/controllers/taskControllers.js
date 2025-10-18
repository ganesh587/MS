const taskSchema = require('../models/taskSchema');
const { getChannel } = require('../config/rabbitMq');
const { get } = require('../routes/taskRoutes');

class TaskController {
   createTask = async (req, res) => {
    try {
      const task = new taskSchema(req.body);
      await task.save();

      const message = {
        taskId: task._id,
        title: task.title
      };
      if (!getChannel()) {
        return res.status(503).send({ message: 'RabbitMQ channel not available' });
      }
      const channel = getChannel();
      channel.sendToQueue('task_queue', Buffer.from(JSON.stringify(message)));
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
