//Model for user
var mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, require: [true,'El campo nombre es requerido!.']},
});

module.exports = mongoose.model('User', userSchema);