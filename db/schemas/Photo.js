const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Photo = new Schema({
  id: ObjectId,
  userId: ObjectId,
  placeId: ObjectId,
  name: String,
  extension: String,
  path: String,
})

module.exports = { schema: Photo, model: mongoose.model('Photo', Photo) };