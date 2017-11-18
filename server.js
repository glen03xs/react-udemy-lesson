const express = require('express');

// Create the app
const app  = express();

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Express is running on Port 3000');
});