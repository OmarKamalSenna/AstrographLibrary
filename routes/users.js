const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/database');
var checkUser = null;

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        usertype: req.body.usertype,
        city: req.body.city,
        companyid: req.body.companyid
    });


    if (checkUser != false) {
        User.addUser(newUser, (err, user) => {
            if (err) {
                res.json({ success: false, msg: 'Failed to register user' });
            } else {
                res.json({ success: true, msg: 'User registered' });
            }
        });
    } else {
        console.log("no no no");
    }
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
                return res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        usertype: user.usertype,
                        city: user.city,
                        companyid: user.companyid
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
    return res.send({ user: req.user });
});

//Businesses - NOT IN USERS ROUTES

router.get('/randombusinesses', (req, res) => {
    User.getRandomBusinesses(function (err, results) {
        if (err) throw err;
        res.send({ results });
        return true;
    });

    //  next();
});


router.get('/:uid', (req, res) => {
    // make somethings with username
    const username = req.params.uid;
    User.getUserByUsername(username, (err, user) => {
        if (err) res.send(err);
        if (!user || user.usertype == false) {
            res.send({ success: false, msg: 'User not found' });
            return false;
        }
        res.send({success: true, user: user});

    });
});


module.exports = router;

