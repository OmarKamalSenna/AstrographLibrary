const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//El schema
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    usertype: {
        type: Boolean,
        required: true
    },

    companyid: {
        type: String,
        required: false
    }

});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    const query = { username: username };
    User.findOne(query, callback);
}


module.exports.updateUser = function (id, user, options, callback) {
    var query = { _id: id };
    var update = {
        name: user.name,
        city: user.city,
        email: user.email


    }
    Event.findOneAndUpdate(query, update, options, callback);
}


module.exports.getRandomBusinesses = function (callback) {
    
    User.aggregate([{ $match: { 'usertype': true } }, { $sample: { size: 2 } }], function (err, res) {
        if (err) throw err;
        callback(err, res);
    });
}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hashedPassword, callback) {
    bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}