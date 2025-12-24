// Import Express framework
var express = require('express');

// Create Express application
var app = express();

// Respond for root URL "/"
app.get('/', function (req, res) {
  res.send('Welcome arkan tandel node to Node-app');
});

// Listen on port (3000 locally or env port in cloud)
app.listen(process.env.PORT || 3000, function () {
  console.log('Server is running on port 3000');
});

// Export app for external use
module.exports = app;
