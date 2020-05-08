// GET  /albums  ->index

app.get('/albums', function (req, res) {
    let index = map(albums, function (album) {
        return {
            href: '/albums' + album.id,
            properties: {
                name: album.name,
                artist: album.artist
            }
        };
    });
    res.send(index);
});

// Support POST;
// POST /albums   -> create, return URI

app.post('/albums', function (req, res) {
    let id = cuid();
    var album = mixIn({}, req.body, {
        id: id
    });
    albums[id] = album;
    res.send(201, {
        href: '/albums/' + id
    });
});

// Deliver helperul messages for the /albums index

// send available options on OPTIONS request
app.options('/albums', function (req, res) {
    res.send(['GET', 'POST', 'OPTIONS']);
});

// deliver 405 error if the request method isn't defined
app.all('/albums', errorHandler.httpError(405));

// GET /albums/:id -> show
app.get('/albums/:id', function (req, res, next) {
    var id = req.params.id,
        body = albums[id],
        err;
    if (!body) {
        err = new Error('Album not found');
        err.status = 404;
        return next(err);
    }
    res.send(200, body);
});


// PUT /albums/:id -> create or update
app.put('/albums/:id', function (req, res) {
    var album = mixIn({}, req.body),
        id = req.params.id,
        exists = albums[id];
    album.id = id;
    albums[id] = album;
    if (exists) {
        return res.send(204);
    }
    res.send(201, {
        href: '/albums/' + album.id
    });
});

// DELETE /albums/:id -> destroy
app.delete('/albums/:id',
    function (req, res, next) {
        var id = req.params.id,
            body = albums[id],
            err;
        if (!body) {
            err = new Error('Album not found');
            err.status = 404;
            return next(err);
        }
        delete albums[id];
        res.send(204);
    });


// Send available options on OPTIONS requests
app.options('/albums', function (req, res) {
    res.send(['GET', 'PUT', 'DELETE', 'OPTIONS']);
});
// 405 Method Not Allowed
app.all('/albums/:id', errorHandler.httpError(405));