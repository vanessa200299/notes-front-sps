//Model for note
var mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, require: true },
    content: { type: String, require: true },
    created: { type: Date, require: true },
});

module.exports = mongoose.model('Note', noteSchema);