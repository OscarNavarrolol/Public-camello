const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) res.status(500).send(err);
    res.json(users);
  });
};

exports.createUser = (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'User created successfully', id: result.insertId });
  });
};

exports.getUserById = (req, res) => {
  User.getById(req.params.id, (err, user) => {
    if (err) res.status(500).send(err);
    res.json(user);
  });
};

exports.updateUser = (req, res) => {
  User.update(req.params.id, req.body, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'User updated successfully' });
  });
};

exports.deleteUser = (req, res) => {
  User.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'User deleted successfully' });
  });
};