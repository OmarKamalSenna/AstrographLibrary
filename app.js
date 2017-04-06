const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const users = require('./routes/users');
const config = require('./config/database');

//Connecting to database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
mongoose.connection.on('connected', () => console.log('Connected to database'+config.database));
mongoose.connection.on('error', (err) =>{
    console.log('Database error: '+error);
})
//Use middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/users',users);
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');

});

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(port, () =>{
    console.log('Server started on post'+port);
}); 