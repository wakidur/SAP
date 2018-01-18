
const express = require('express');

const app = express();
// make '/app' default route
app.get('/', function (req, res) {
  var options = {
    root: __dirname + '/client/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});
let server =  app.listen( 3000, () => {
    console.log("Example listening on port 3000");
    let host = server.address().address;
    host = (host === '::' ? 'localhost' : host);
    let port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
})