const express = require('express');
const routes = require('./routes');
const errorHandler = require('./errorhandler');

const app = express();
app.use(express.json());

app.use('/api', routes);
app.use(errorHandler);

module.exports = app;
