const userSchema = require('../models/userSchema');


class UserController {
   createUser = async (req, res) => {
    try {
      const user = new userSchema(req.body);
      await user.save();
      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error);
    }
    };
    
    getUsers = async (req, res) => {
      try {
        const users = await userSchema.find();
        res.status(200).send(users);
      } catch (error) {
        res.status(500).send(error);
      }
    };

    getUserById = async (req, res) => {
      try {
        const user = await userSchema.findById(req.params.id);  
        if (!user) {
          return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
      } catch (error) {
        res.status(500).send(error);
      }
    };
}

exports.UserController = new UserController();
