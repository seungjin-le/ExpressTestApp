const express = require('express');

const app = express();

const PORT = process.env.PORT || 4000;

app.use('/', (req, res) => {
	res.send('Hello World');
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
