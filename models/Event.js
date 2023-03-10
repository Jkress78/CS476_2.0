const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    strtDate: {
        type: Date
    },
    endDate: { 
        type: Date
    },
    semester: {
        type: String
    },
    year: {
        type: String
    },
    description: {
        type: String
    }
}, {typeKey: '$type'});

module.exports = mongoose.model('Event', eventSchema);