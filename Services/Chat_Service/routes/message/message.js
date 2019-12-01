// message.js

const createEndpoint = require('./create');
const readEndpoint = require('./read');
const deleteEndpoint = require('./delete');

module.exports = {
    createEndpoint,
    readEndpoint,
    deleteEndpoint
};