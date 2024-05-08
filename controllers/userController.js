const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel');
const factory = require('./handlerFactory');

const createUser = catchAsync(async (req, res, next) => {
  const doc = await User.create({
    name: req.body.name,
    email: req.body.email,
  });

  res.status(201).json({
    status: 'success',
    data: doc,
  });
});

const getUser = factory.getOne(User);
const getAllUsers = factory.getAll(User);
const updateUser = factory.updateOne(User);
const deleteUser = factory.deleteOne(User);

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
