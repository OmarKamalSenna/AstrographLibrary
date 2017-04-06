const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        usertype: req.body.usertype
    });
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: `Failed to register user` });
        } else {
            res.json({ success: true, msg: `User registered successfully!` });
        }
    });
});


//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, { expiresIn: 5000 });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        usertype: user.usertype
                    }
                });
            }
            else {
                return res.json({ sucess: false, msg: 'Wrong password' });
            }
        });
    })
});

//Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.send({ user: req.user });
});

//Businesses - NOT IN USERS ROUTES

router.get('/randombusinesses', (req, res) => {
     User.getRandomBusinesses(function(err, results){
        if (err) throw err;
         console.log('yesss',results);
        res.send(results);
     });

  //  next();
});



module.exports = router;