var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

function create(req, res) {
// create an in-mem ticket
var ticket = new Ticket(req.body);
// assign the flight id
ticket.flight = req.params.id;
// now save the ticket to the db...
ticket.save(function(err) {
  res.redirect(`/flights/${ticket.flight._id}`)
});
}

function newTicket(req, res) {
Flight.findById(req.params.id, function(err, flight) {
Ticket.find({}, function(err, tickets){
        res.render('tickets/new', {
            title: 'Add Ticket', flight, tickets
        });
    });
});
}
