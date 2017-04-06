const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//El schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
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
    usertype: {
        type: Boolean,
        required: true
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

module.exports.getRandomBusinesses = function (callback) {
    //  const query = { usertype: true };
    //    User.aggregate([{$sample: {size: 2}}], function(err, data){
    //        if(err) throw err;

    //        return data;
    //    });
    //   User.find();
    //   User.findOne({_id: '58e507d9b504da233884f514'}, callback);
    //     User.find().lean().exec(function (err, data) {
    //         // so now, we can return all students to the screen.
    //         if(err) throw err;
    //          JSON.stringify(data);
    //     });
    // }

    User.aggregate([{ $sample: { size: 4 } }], function(err, res) { 
       if(err) throw err;
      // console.log(res);
       callback(err,res);
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