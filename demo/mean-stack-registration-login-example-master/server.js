require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');

// dependent controller 
var login = require('./controllers/login.controller');
var register = require('./controllers/register.controller');
var apps = require('./controllers/app.controller');
var users = require('./controllers/api/users.controller')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(session({
    secret: config.secret,
    resave: false,
    saveUninitialized: true
}));

// use JWT auth to secure the api
app.use('/api', expressJwt({
    secret: config.secret
}).unless({
    path: ['/api/users/authenticate', '/api/users/register']
}));

// routes
app.use('/login', login);
app.use('/register', register);
app.use('/app', apps);
app.use('/api/users', users);

// make '/app' default route
app.get('/', function (req, res) {
    return res.redirect('/app');
});

// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});