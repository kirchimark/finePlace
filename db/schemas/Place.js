const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Photo = require('./Photo').schema;

const Place = new Schema({
  id: ObjectId,
  userId: ObjectId,
  longitude: Number,
  latitude: Number,
  radius: Number,
  description: String,
  photos: {type: [Photo], default: null, required: false},
})

module.exports = mongoose.model('Place', Place);