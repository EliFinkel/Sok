/**
 * server.js
 */
const express = require("express");
const app = express();

const DataBase = require("../DataBase.js");

//Define the port
const port = 8080;

// Body parser
const bodyParser = require('body-parser');

//Setup Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened: true}));

// Routes
const messageEndpoints = require('../routes/message/message');

app.use('/message', messageEndpoints.createEndpoint);
app.use('/message', messageEndpoints.readEndpoint);
app.use('/message', messageEndpoints.deleteEndpoint);




app.listen(port, () => {
    console.log(`Chat Service Started on ${port}`);
});