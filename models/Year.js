const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const yearSchema = new Schema({
    year: String
}, {typeKey: '$type'});

module.exports = mongoose.model('Year', yearSchema);