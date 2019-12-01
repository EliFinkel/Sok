const mongoose = require('mongoose');
const url = 'mongodb+srv://eman1123:1213@cluster0-e5k6j.mongodb.net/test?retryWrites=true';


class Database {
	constructor(){
		console.log("Attempting to Initialize Database Connection");
		this._connect();
	};

	_connect(){
		mongoose.connect(url)
		.then(() => {
			console.log('Database connection succesful');
		})
		.catch((err) => {
			console.error('Database connection error : ' + err);
		});
	};
}
module.exports = new Database();