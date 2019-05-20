var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var destinationsSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date,
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American','Southwest','United']
    },
    flightNo: Number,
        
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destinations: [destinationsSchema],
});

module.exports = mongoose.model('Flight', flightSchema);
