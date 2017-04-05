var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/loginmini');
var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
var mini = express();

mini.set('views', path.join(__dirname, 'views'));
mini.engine('handlebars', exphbs({defaultLayout:'layout'}));
mini.set('view engine', 'handlebars');
mini.use(bodyParser.json());
mini.use(bodyParser.urlencoded({ extended: false }));
mini.use(cookieParser());
mini.use(express.static(path.join(__dirname, 'public')));
mini.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
mini.use(passport.initialize());
mini.use(passport.session());
mini.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//register
/*mini.get("/register", function(req, res) {
    res.render("register");
});*/

//register process
/*mini.post("/register", function(req,res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/secret"); 
        });
    });
});*/

//login
/*mini.get("/login", function (req, res) {
  res.render("login");
});

//login process
mini.post("/login", passport.authenticate("local", {
  sucessRedirect: "/home",
  failureRedirect: "/login"
}), function (req, res) {

});

mini.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});*/


// Connect Flash


//
mini.use(flash());

// Global Vars
mini.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});



mini.use('/', routes);
mini.use('/users', users);

mini.listen(3000, function () {
  console.log('Server Started on port 3000....');
});
