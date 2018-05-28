const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  id: Object,
  name: String,
  last: String,
  avatar: {type: String, required: false},
});

module.exports = mongoose.model('User', User);