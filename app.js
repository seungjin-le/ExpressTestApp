const express = require('express');
const fs = require('fs');
const router = express.Router();
const app = express();

const PORT = process.env.PORT || 4000;

router.get('/', async (req, res) => {
	res.send('<h1>Hello world</h1>');
});

router.param('id', (req, res, next, value) => {
	console.log(value, 'qweqweqew');
	req.params.id = value + '12321321123312';
	next();
});

router.get('/:id', (req, res) => {
	console.log(req.params.id);
	res.send('Get');
});
app.post('/', async (req, res) => {
	res.send('Post');
});

app.use('/user', router);

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
