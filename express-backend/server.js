
const express = require('express');

const app = express();
app.get('/',  (req, res) => {
    res.send('Hello World!');
  });
let server =  app.listen( 3000, () => {
    console.log("Example listening on port 3000");
    let host = server.address().address;
    host = (host === '::' ? 'localhost' : host);
    let port = server.address().port;
 
  console.log('listening at http://%s:%s', host, port);
})