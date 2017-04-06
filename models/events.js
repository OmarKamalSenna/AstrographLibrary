var mongoose = require('mongoose');

var eventsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now

    },
    provider: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }



});

var Event = module.exports = mongoose.model('Event', eventsSchema)

//Getting the events 

module.exports.getEvents = function (callback, limit) {
    Event.find(callback).limit(limit);

}

module.exports.getEventByID = function (id, callback) {
    Event.findById(id, callback);
}

module.exports.addEvent = function (event, callback) {
    Event.create(event, callback);
}

//Updating events
module.exports.updateEvent = function (id, event, options, callback) {
    var query = { _id: id };
    var update = {
        name: event.name,
        type: event.type,
        provider: event.provider,
        price: event.price

    }
    Event.findOneAndUpdate(query, update, options, callback);
}

//Deleting events
module.exports.removeEvent = function (id, callback) {
    var query = { _id: id };
    Event.remove(query, callback);
}