const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
require('./routes/homeroute').route(app);
require('./routes/accountroute').route(app);
require('./routes/loginroute').route(app);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/test', function (req, res) {
    res.sendFile(__dirname + '/views/test.html');
    });

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/views/login.html');
    });

app.get('/accounts', function (req, res) {
    res.sendFile(__dirname + '/views/accounts.html');
    });