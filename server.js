const express = require('express');
const app = express();
const path = require('path');                                   // PathLocationStrategy

app.use(express.static(__dirname + '/dist'));                   // Run the app by serving the static file in the dist directory

app.listen(process.env.PORT || 8080);                           // Start the app by listening on the default Heroku port

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));    // For all GET requests, send back index.html so that PathLocationStrategy can be used
  });