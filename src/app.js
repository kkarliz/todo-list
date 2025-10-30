const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/tasks.route');

const app = express();

//Midderware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to database
connectDB();

//Static & Views engine
app.use('/static', express.static('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Routes
app.use('/task', taskRoutes);

//Default routes
app.get('/', (req, res) =>{
	res.status(200).send('Welcome!');
});

module.exports = app;
