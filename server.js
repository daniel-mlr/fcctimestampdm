var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Bonjour le monde!');
});

app.listen(process.env.PORT || 5000, function () {
	console.log('Listening on port 3000...');
});
