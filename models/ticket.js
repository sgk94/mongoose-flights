var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {type: Schema.Types.ObjectId, ref: 'Ticket'}
});

module.exports = mongoose.model('Ticket', ticketSchema);