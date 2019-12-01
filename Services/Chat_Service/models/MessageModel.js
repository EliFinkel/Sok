// MessageModel.js
const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
	Value: {
		type: String,
		required: true
	},
	Author: {
		type: String,
		required: true
	},
	ChatGroup: {
		type: String,
		required: true
	},
	TimeStamp: {
		type: String,
		required: true
	},
	Status: {
		type: Boolean,
		required: true
	}

});

module.exports = mongoose.model('MessageModel', messageSchema);