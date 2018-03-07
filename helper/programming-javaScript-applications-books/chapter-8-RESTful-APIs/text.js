// you need to parse the body to the method param
app.use(express.json());
app.use(express.urlencode());

// now methodOverride() will work

app.use(express.methodOverride());

/********************************************* */

app.get('/albums', albumHandler());
app.all('/albums', function(req, res, next) {
    var err = new Error();
    err.route = '/albums';
    err.status = 405;
    next(err);
});


// or

app.get('/albums', albumHandler());
app.all('/albums', function(req, res, next) {
    res.send(405);
});


// express-error-handler