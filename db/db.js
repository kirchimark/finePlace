const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/finePlace');

const User = require('./schemas/User');
const Photo = require('./schemas/Photo').model;
const Place = require('./schemas/Place');

module.exports = {
  User,
  Place,
  Photo,
};