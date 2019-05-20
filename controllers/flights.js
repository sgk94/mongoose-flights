var Flight = require('../models/flight');
var Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, ticket) {
        res.render('flights/show', {
            title: 'Flight Details', flight, ticket
      });
    });
});
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    if (req.body.departs === '') {
        req.body.departs = undefined 
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
        console.log(err);
        if(err) return res.render('flights/new')
        else {res.redirect('/flights')};
    });
}